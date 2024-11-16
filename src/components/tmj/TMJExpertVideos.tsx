import ReactPlayer from 'react-player';

export default function TMJExpertVideos() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Expert Insights</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=example1"
              width="100%"
              height="100%"
              controls
              light={true}
            />
          </div>
          <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=example2"
              width="100%"
              height="100%"
              controls
              light={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}