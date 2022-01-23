import React from 'react';

const sevenLayers = () => {
    const sevenLayer = [
    {
        name: "Experience",
        desc: "Games, Social, Esports, Theater, Shopping"
    },
    {
        name: "Discovery",
        desc: "Ad Networks, Social, Curation, Ratings, Stores, Agents"
    },
    {
        name: "Creator Economy",
        desc: "Design Tools, Asset Markets, Workflow, Commerce"
    },
    {
        name: "Spatial Computing",
        desc: "3D Engines, VR/AR/XR, Multitasking UI, Geospatial Mapping"
    },
    {
        name: "Decentralization",
        desc: "Edge Computing, AI agents, Microservice, Blockchain"
    },
    {
        name: "Human Interface",
        desc: "Mobile, Smartglasses, Wearables, Haptic, Gestures, Voice, Neural"
    },
    {
        name: "Infrastructure",
        desc: "5G, WiFi, 6G, Cloud, 7nm to 1.4nm, MEMS, GPUs, Materials"
    },
    ]
  return (
        <div className="flex items-center justify-between gap-8 mb-32">
            <div className="w-6/12">
              1
            </div>
            <div  className="w-6/12 text-left">
              <h3 className="text-2xl mb-8">The seven layers of the Metaverse</h3>
              {
                sevenLayer.map(element => {
                  return (
                    <div className="flex flex-row gap-4 mb-4">
                      <span className="mr-4">icon me</span>
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
  );
};

export default sevenLayers;
