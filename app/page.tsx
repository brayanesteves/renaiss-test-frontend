import { SunIcon, BoltIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-black">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-2 text-center">

        {/* <ROW Nº0> */}
        <div>

          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">"What is the difference between a dog and a cat?"</p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>

        </div>
        {/* <.ROW Nº0> */}

        {/* <ROW Nº1> */}
        <div>

        <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Change the ChatGPT Model to use</p>
            <p className="infoText">Messages are stored in Firebase's Firestore</p>
            <p className="infoText">Hot Toast notifications when ChatGPT is thinking!</p>
          </div>

        </div>
        {/* <.ROW Nº1> */}

        {/* <ROW Nº2> */}
        <div>

        <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">May occasionally generate incorrect information</p>
            <p className="infoText">May occasionally produce harmful instructions or biased content</p>
            <p className="infoText">Limited knowledge of world and events after 2021</p>
          </div>

        </div>
        {/* <.ROW Nº2> */}        

      </div>
    </div>
  );
}

export default Home;