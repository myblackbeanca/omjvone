import ReactPlayer from 'react-player';

export default function TMJOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What is TMJ?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                The temporomandibular joint (TMJ) is the joint that connects your jawbone to your skull. It acts like a sliding hinge, enabling you to talk, chew, and yawn. TMJ disorders occur when there are problems with the joint and surrounding muscles.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2" />
                  <p className="text-gray-600">Affects millions worldwide</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2" />
                  <p className="text-gray-600">More common in women</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2" />
                  <p className="text-gray-600">Often misdiagnosed</p>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=jWdaRt7jBIE"
                width="100%"
                height="100%"
                controls
                light={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}