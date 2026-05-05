import { lazy } from 'react';

// Lazy load heavy animation components
export const LazyFrameAnimationSection = lazy(() => import('@/components/FrameAnimationSection'));
export const LazyFloatingPellets = lazy(() => import('@/components/FloatingPellets'));
export const LazySplittingPellet = lazy(() => import('@/components/SplittingPellet'));