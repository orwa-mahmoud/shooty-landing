import React,{ useEffect,useState } from 'react'
import Image from 'next/image'
import axios from "axios";
function Clients() {

    const [clientSectionContent, setClientSectionContent] = useState([]);
    const [clients, setClients] = useState([]);

    const getClientSectionContent = async (data) => {

        await axios.get("/api/clientSectionContent", data,
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
        .then(async function (response) {
            setClientSectionContent(response.data.clientSectionContent)
            setClients(response.data.clients)
        })
        .catch(function (error) {
            console.log('items error:',error);
        })
    }

    useEffect(() => {
        getClientSectionContent()
    },[]);

  return (
   <>
    <section id="clients" className="clients text-center">
            <div className="container">
                <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-12">
                        <h2>
                            {clientSectionContent.headLine_1} {clientSectionContent.headLine_number} {clientSectionContent.headLine_2}
                        </h2>
                    </div>
                    {clients && (
                        clients.map((item,index) => {
                            return (
                                <div key={index} className="col-4 col-lg-2" data-aos="zoom-out" data-aos-delay="100" >
                                    <Image src={item} alt="Dior"  width={100} height={50} className="custom-img width-60 img-fluid"/>
                                </div>
                            )
                        })
                    )

                    }
                </div>
            </div>
        </section>
   </>
  )
}

export default Clients