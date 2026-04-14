import { useState } from 'react';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { HomeScreen } from './screens/HomeScreen';
import { CheckInScreen } from './screens/CheckInScreen';
import { HistoryScreen } from './screens/HistoryScreen';
import { InsightsScreen } from './screens/InsightsScreen';
import { ReflectionScreen } from './screens/ReflectionScreen';
import { BottomTabBar } from './components/BottomTabBar';
import { GrainOverlay } from './components/GrainOverlay';

export default function App() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isCheckingIn, setIsCheckingIn] = useState(false);

  if (!hasCompletedOnboarding) {
    return <OnboardingScreen onComplete={() => setHasCompletedOnboarding(true)} />;
  }

  if (isCheckingIn) {
    return (
      <CheckInScreen
        onComplete={() => {
          setIsCheckingIn(false);
          setActiveTab('home');
        }}
        onClose={() => setIsCheckingIn(false)}
      />
    );
  }

  return (
    <div className="min-h-screen max-w-[430px] mx-auto relative bg-[var(--off-white)]">
      <GrainOverlay />
      {activeTab === 'home' && (
        <HomeScreen
          onStartCheckIn={() => setIsCheckingIn(true)}
          onNavigateReflect={() => setActiveTab('reflect')}
        />
      )}
      {activeTab === 'history' && <HistoryScreen />}
      {activeTab === 'insights' && <InsightsScreen />}
      {activeTab === 'reflect' && <ReflectionScreen />}

      <BottomTabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}