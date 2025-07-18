import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  url: string;
  format: string;
  width: number;
  height: number;
  bytes: number;
  created_at: string;
}

export class CloudinaryService {
  /**
   * Upload image to Cloudinary
   */
  static async uploadImage(
    file: string | Buffer, 
    options: {
      folder?: string;
      public_id?: string;
      transformation?: Record<string, unknown>;
      tags?: string[];
    } = {}
  ): Promise<CloudinaryUploadResult> {
    try {
      // Convert Buffer to base64 data URL if needed
      let uploadFile: string;
      if (file instanceof Buffer) {
        uploadFile = `data:image/jpeg;base64,${file.toString('base64')}`;
      } else {
        uploadFile = file as string;
      }
        
      const result = await cloudinary.uploader.upload(uploadFile, {
        folder: options.folder || 'jps-website',
        public_id: options.public_id,
        transformation: options.transformation,
        tags: options.tags || ['jps-website'],
        resource_type: 'auto',
      });

      return {
        public_id: result.public_id,
        secure_url: result.secure_url,
        url: result.url,
        format: result.format,
        width: result.width,
        height: result.height,
        bytes: result.bytes,
        created_at: result.created_at,
      };
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      throw new Error('Failed to upload image to Cloudinary');
    }
  }

  /**
   * Delete image from Cloudinary
   */
  static async deleteImage(publicId: string): Promise<boolean> {
    try {
      const result = await cloudinary.uploader.destroy(publicId);
      return result.result === 'ok';
    } catch (error) {
      console.error('Cloudinary delete error:', error);
      return false;
    }
  }

  /**
   * Generate optimized image URL
   */
  static generateOptimizedUrl(
    publicId: string,
    options: {
      width?: number;
      height?: number;
      crop?: string;
      quality?: string;
      format?: string;
    } = {}
  ): string {
    return cloudinary.url(publicId, {
      width: options.width,
      height: options.height,
      crop: options.crop || 'fill',
      quality: options.quality || 'auto',
      format: options.format || 'auto',
      fetch_format: 'auto',
    });
  }

  /**
   * Get image details
   */
  static async getImageDetails(publicId: string) {
    try {
      const result = await cloudinary.api.resource(publicId);
      return result;
    } catch (error) {
      console.error('Cloudinary get image details error:', error);
      throw new Error('Failed to get image details');
    }
  }

  /**
   * List images in folder
   */
  static async listImages(
    folder: string = 'jps-website',
    options: {
      maxResults?: number;
      nextCursor?: string;
    } = {}
  ) {
    try {
      const result = await cloudinary.api.resources({
        type: 'upload',
        prefix: folder,
        max_results: options.maxResults || 30,
        next_cursor: options.nextCursor,
      });
      return result;
    } catch (error) {
      console.error('Cloudinary list images error:', error);
      throw new Error('Failed to list images');
    }
  }

  /**
   * Convert base64 to data URL for upload
   */
  static base64ToDataUrl(base64: string, mimeType: string): string {
    return `data:${mimeType};base64,${base64}`;
  }

  /**
   * Upload multiple images
   */
  static async uploadMultipleImages(
    files: Array<{ file: string | Buffer; options?: Record<string, unknown> }>,
    folder: string = 'jps-website'
  ): Promise<CloudinaryUploadResult[]> {
    try {
      const uploadPromises = files.map(({ file, options }) =>
        this.uploadImage(file, { ...options, folder })
      );
      
      const results = await Promise.all(uploadPromises);
      return results;
    } catch (error) {
      console.error('Cloudinary multiple upload error:', error);
      throw new Error('Failed to upload multiple images');
    }
  }
}