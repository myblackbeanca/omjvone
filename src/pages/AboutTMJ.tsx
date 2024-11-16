import PageBanner from '../components/PageBanner';
import TMJOverview from '../components/tmj/TMJOverview';
import TMJSymptoms from '../components/tmj/TMJSymptoms';
import TMJStatistics from '../components/tmj/TMJStatistics';
import TMJExpertVideos from '../components/tmj/TMJExpertVideos';

export default function AboutTMJ() {
  return (
    <div className="pt-20">
      <PageBanner
        title="Understanding TMJ Disorders"
        description="Get comprehensive information about TMJ disorders, symptoms, and treatment options"
        ctaText="Get Support"
        ctaLink="/community"
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&h=600"
      />
      <TMJOverview />
      <TMJSymptoms />
      <TMJStatistics />
      <TMJExpertVideos />
    </div>
  );
}