import React from "react";
import image from '../Assets/DRC.png';
// import "./styles.css";
// import "./pure-react.css";

const Home = () => {

    return (
        <div className="flex flex-row">
            <div className="flex flex-col  text-coal w-3/5 px-5">
                <h1 className="mt-6 mb-2 text-2xl font-bold text-deep-navy">What is Snowflake Data Clean Room?</h1>
                <section className="pb-2 mb-2 text-gray-500 border-b border-gray-300">
                    <p>Snowflake Data Clean Room is a secure multi-party collaboration
                        environment to share data without revealing PII or compromising privacy.
                    </p>
                </section>
                <section className="pb-2 mb-2 text-gray-500">
                    <p>
                        Build your DCR in Snowflake for use cases like a <strong className=" italic">marketing campaign</strong>,<strong className=" italic"> optimizing ad placement</strong>,
                        identifying common transaction patterns to improve fraud detection, etc.
                    </p>
                </section>

                <p>
                    Snowflake DCR enables the rapid sharing of real-timedata without copying, moving, or sharing the
                    underlying data, and performs analyses on large amounts of data with high performance and scalability.
                </p>

                <h2>How does a data clean room work?</h2>
                <p>
                    Data clean rooms control what data comes in, how the data in the clean room can be joined to other data in the clean room,
                    what types of analytics each party can perform on the data, and what data, if any, can leave.
                </p>
                <p>
                    Any PII data loaded into the clean room is secured and encrypted. The data owner has full control over the
                    clean room, while approved partners can get a feed with anonymized data.
                </p>
                <img src={image} alt='Image_Description' />

                <h2>Snowflake technologies to build Data Clean Room are:</h2>
                <p>
                    a. Secure Data Sharing
                </p>
                <p>
                    b. Streams and Tasks
                </p>
                <p>
                    c. Row Access Policy
                </p>
                <p>
                    d. A Stored Procedure
                </p>
                <p>
                    Data Clean Room helps in enriching your customer base without disclosing sensitive data.
                </p>

                <h2>BENEFITS OF DISTRIBUTED DATA CLEAN ROOMS</h2>
                <p>
                    Data clean rooms offer a variety of benefits to advertisers,
                    media companies, and retailers. Here are three of the most significant.
                </p>
                <p>
                    1. Access to more data while complying with regulations: With the security
                    and access controls that data clean rooms provide, media companies and publishers
                    can provide detailed reporting, and advertisers can track attribution more effectively.
                </p>
                <p>
                    2. Ability to build custom audiences: Data clean rooms can be used to build custom audiences that can be used on advertising
                    platforms such as Facebook for advertising, allowing marketers to fine-tune their ad targeting.
                </p>
                <p>
                    3. Advanced analysis: Data clean rooms allow organizations to conduct in-depth analysis on combined data sets to gain insights
                    on customer behavior, segmentation, customer lifetime value, and more.
                </p>


            </div>
            <div className="flex flex-col flex-1">
                <h1 className="mt-6 mb-2 text-2xl font-bold text-deep-navy pb-4 border-b border-gray-200">How to videos</h1>
                <div className="flex justify-center">
                    <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    
                            <video width="320" height="240" controls className="w-full rounded-t-lg">
                                <source src="https://youtu.be/QTA8UfoR4WU" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                                Your browser does not support the video tag.
                            </video>
                        
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Video Card</h5>
                            <p className="text-gray-700 text-base mb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                            {/* <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home