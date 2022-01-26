import React from 'react';
import Image from 'next/image'
import ExpiLogo from '../public/images/Expi.png'
import Computing from '../public/images/computing.png'
import Creator from '../public/images/creator.png'
import Decentralization from '../public/images/decentralization.png'
import Discovery from '../public/images/discovery.png'
import Human from '../public/images/human.png'
import Infra from '../public/images/infra.png'
import Seven from '../public/images/NFT.png'

const sevenLayers = () => {
    const sevenLayer = [
    {
        icon: ExpiLogo,
        name: "Experience",
        desc: "Games, Social, Esports, Theater, Shopping"
    },
    {
        icon: Discovery,
        name: "Discovery",
        desc: "Ad Networks, Social, Curation, Ratings, Stores, Agents"
    },
    {
        icon: Creator,
        name: "Creator Economy",
        desc: "Design Tools, Asset Markets, Workflow, Commerce"
    },
    {
        icon: Computing,
        name: "Spatial Computing",
        desc: "3D Engines, VR/AR/XR, Multitasking UI, Geospatial Mapping"
    },
    {
        icon: Decentralization,
        name: "Decentralization",
        desc: "Edge Computing, AI agents, Microservice, Blockchain"
    },
    {
        icon: Human,
        name: "Human Interface",
        desc: "Mobile, Smartglasses, Wearables, Haptic, Gestures, Voice, Neural"
    },
    {
        icon: Infra,
        name: "Infrastructure",
        desc: "5G, WiFi, 6G, Cloud, 7nm to 1.4nm, MEMS, GPUs, Materials"
    },
    ]
  return (
        <div className="flex lg:flex-row flex-col items-center justify-between gap-8 mb-32">
            <div className="lg:w-6/12 w-9/12 lg:h-96 h-44 block relative -mt-12 box-6">
                   <Image 
                    src={Seven}
                    alt="Logo"
                    layout="fill"
                    unoptimized={true}
                  />
            </div>
            <div  className="lg:w-6/12 w-9/12 text-left">
                <div className="lg:w-9/12 w-full mx-auto">
                    <h3 className="text-2xl mb-8 lg:text-left text-center">The seven layers of the Metaverse</h3>
                    {
                        sevenLayer.map((element,key) => {
                        return (
                            <div key={key} className="flex flex-row gap-4 mb-4">
                            <span className="mr-4 seven-icon"><Image className="font-logo"  src={element.icon}alt="Logo" /></span>
                            <div className="flex flex-col">
                                <span>{ element.name }</span>
                                <span className="opacity-70">{ element.desc }</span>
                            </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
  );
};

export default sevenLayers;
