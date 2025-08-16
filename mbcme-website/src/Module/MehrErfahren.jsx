import { Link } from 'react-router-dom';

const MehrErfahren = () =>{
    return (

<section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
         <div className='text-center'>
         <h2 className="font-semibold text-3xl">
        {/*Überschrift*/}
        
        Mehr zum Thema
        </h2>
        </div>
      <div className="flex flex-wrap items-center justify-between mb-8">
       
      </div>
       <div className="flex flex-wrap -mx-4">

 {/* Card 1 Start */}
     
        <div className="rounded-xs w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
        {/* Change Image here */}
          <img
            src="https://cdn.pixabay.com/photo/2021/06/03/13/18/windmill-6307058_1280.jpg"
            alt="Card img"
            className="object-cover object-center w-full h-48"
          />
          <div className="flex flex-grow">
            <div className="triangle"></div>
            <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
              <div>
                <div
                  className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600"
                >
                  {/*Über-Überschrift*/}
                  Interesse?
                </div>
                <div
                  className="block mb-4 text-2xl font-black leading-tight"
                >
                  {/*Überschrift*/}
                  Jobangebote
                </div>
                <p className="mb-4">
                  {/*kurze Beschreibung*/}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus corporis commodi
                  aperiam, amet cupiditate?
                </p>
              </div>
              <div>
                <Link
                  to="/career"
                  className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent"
                >
                  Read More -&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
        
 {/* Card 1 End */}

  {/* Card 2 Start */}
        <div className="rounded-xs w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
        {/* Change Image here */}
          <img
            src="https://cdn.pixabay.com/photo/2021/06/03/13/18/windmill-6307058_1280.jpg"
            alt="Card img"
            className="object-cover object-center w-full h-48"
          />
          <div className="flex flex-grow">
            <div className="triangle"></div>
            <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
              <div>
                <div
                  className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600"
                >
                  {/*Über-Überschrift*/}
                  Interesse?
                </div>
                <div
                  className="block mb-4 text-2xl font-black leading-tight"
                >
                  {/*Überschrift*/}
                  Jobangebote
                </div>
                <p className="mb-4">
                  {/*kurze Beschreibung*/}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus corporis commodi
                  aperiam, amet cupiditate?
                </p>
              </div>
              <div>
                <Link
                  to="/career"
                  className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent"
                >
                  Read More -&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
        
 {/* Card 2 End */}

 {/* Card 3 Start */}
        <div className="rounded-xs w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
        {/* Change Image here */}
          <img
            src="https://cdn.pixabay.com/photo/2021/06/03/13/18/windmill-6307058_1280.jpg"
            alt="Card img"
            className="object-cover object-center w-full h-48"
          />
          <div className="flex flex-grow">
            <div className="triangle"></div>
            <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
              <div>
                <div
                  className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600"
                >
                  {/*Über-Überschrift*/}
                  Interesse?
                </div>
                <div
                  className="block mb-4 text-2xl font-black leading-tight"
                >
                  {/*Überschrift*/}
                  Jobangebote
                </div>
                <p className="mb-4">
                  {/*kurze Beschreibung*/}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus corporis commodi
                  aperiam, amet cupiditate?
                </p>
              </div>
              <div>
                <Link
                  to="/career"
                  className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent"
                >
                  Read More -&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
        
 {/* Card 3 End */}

 

     </div> 
    </section>
    );
};
export default MehrErfahren;