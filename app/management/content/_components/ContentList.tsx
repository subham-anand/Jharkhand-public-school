'use client';

import React, { useState, useEffect } from 'react';
import { IconEdit, IconTrash, IconEye, IconEyeOff, IconTag, IconCalendar } from '@tabler/icons-react';

interface Content {
  _id: string;
  title: string;
  type: string;
  section: string;
  content: string;
  isPublished: boolean;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export default function ContentList() {
  const [contents, setContents] = useState<Content[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);

  useEffect(() => {
    fetchContents();
  }, []);

  const fetchContents = async () => {
    try {
      const response = await fetch('/api/management/content');
      const data = await response.json();
      setContents(data);
    } catch (error) {
      console.error('Error fetching contents:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePublishToggle = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/management/content/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isPublished: !currentStatus,
        }),
      });

      if (response.ok) {
        setContents(contents.map(content => 
          content._id === id 
            ? { ...content, isPublished: !currentStatus }
            : content
        ));
      }
    } catch (error) {
      console.error('Error updating content:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this content?')) {
      try {
        const response = await fetch(`/api/management/content/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setContents(contents.filter(content => content._id !== id));
        }
      } catch (error) {
        console.error('Error deleting content:', error);
      }
    }
  };
  
  const filteredContents = contents.filter(content => {
    if (filter === 'all') return true;
    if (filter === 'published') return content.isPublished;
    if (filter === 'draft') return !content.isPublished;
    return content.type === filter;
  });

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-gray-100 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Content List</h2>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === 'all'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All ({contents.length})
          </button>
          <button
            onClick={() => setFilter('published')}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === 'published'
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Published ({contents.filter(c => c.isPublished).length})
          </button>
          <button
            onClick={() => setFilter('draft')}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === 'draft'
                ? 'bg-orange-100 text-orange-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Draft ({contents.filter(c => !c.isPublished).length})
          </button>
        </div>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {filteredContents.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No content found.
          </div>
        ) : (
          filteredContents.map((content) => (
            <div
              key={content._id}
              className={`border border-gray-200 rounded-lg p-4 ${
                content.isPublished ? 'bg-green-50' : 'bg-orange-50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-medium text-gray-900">{content.title}</h3>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                      {content.type}
                    </span>
                  </div>
                  
                  {content.section && (
                    <p className="text-sm text-gray-600 mb-2">
                      Section: {content.section}
                    </p>
                  )}
                  
                  <p className="text-sm text-gray-700 mb-2 line-clamp-2">
                    {content.content}
                  </p>
                  
                  {content.tags.length > 0 && (
                    <div className="flex items-center gap-1 mb-2">
                      <IconTag size={12} className="text-gray-400" />
                      {content.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <IconCalendar size={12} />
                      {new Date(content.createdAt).toLocaleDateString()}
                    </span>
                    <span className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                      content.isPublished
                        ? 'bg-green-100 text-green-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {content.isPublished ? (
                        <><IconEye size={12} /> Published</>
                      ) : (
                        <><IconEyeOff size={12} /> Draft</>
                      )}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePublishToggle(content._id, content.isPublished)}
                    className={`p-1 rounded-md ${
                      content.isPublished
                        ? 'text-orange-600 hover:bg-orange-100'
                        : 'text-green-600 hover:bg-green-100'
                    }`}
                    title={content.isPublished ? 'Unpublish' : 'Publish'}
                  >
                    {content.isPublished ? <IconEyeOff size={16} /> : <IconEye size={16} />}
                  </button>
                  <button
                    onClick={() => setSelectedContent(content)}
                    className="p-1 text-blue-600 hover:bg-blue-100 rounded-md"
                    title="Edit"
                  >
                    <IconEdit size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(content._id)}
                    className="p-1 text-red-600 hover:bg-red-100 rounded-md"
                    title="Delete"
                  >
                    <IconTrash size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Preview Modal */}
      {selectedContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{selectedContent.title}</h3>
              <button
                onClick={() => setSelectedContent(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="space-y-2">
              <p><strong>Type:</strong> {selectedContent.type}</p>
              <p><strong>Section:</strong> {selectedContent.section}</p>
              <p><strong>Status:</strong> {selectedContent.isPublished ? 'Published' : 'Draft'}</p>
              <div>
                <strong>Content:</strong>
                <div className="mt-2 p-3 bg-gray-50 rounded-md">
                  <pre className="whitespace-pre-wrap text-sm">{selectedContent.content}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
