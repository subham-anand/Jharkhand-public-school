import React from 'react';
import AuthenticatedWrapper from '../_components/AuthenticatedWrapper';
import HeroCarouselClient from './HeroCarouselClient';

export default function HeroCarouselManagement() {
  return (
    <AuthenticatedWrapper>
      {(user) => <HeroCarouselClient user={user} />}
    </AuthenticatedWrapper>
  );
}