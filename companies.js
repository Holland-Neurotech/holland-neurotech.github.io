const companies = [
    {
        name: "Neuralink",
        description: "Developing ultra high bandwidth brain-computer interfaces. Received FDA approval for human trials in 2024.",
        location: "Fremont, CA",
        website: "https://neuralink.com",
        tags: ["bci", "ai", "medical", "therapeutics", "invasive"]
    },
    {
        name: "Kernel",
        description: "Developing non-invasive brain recording technology using time-resolved functional ultrasound.",
        location: "Los Angeles, CA",
        website: "https://kernel.com",
        tags: ["bci", "diagnostics", "research", "medical", "noninvasive"]
    },
    {
        name: "Synchron",
        description: "Developing minimally invasive neural interface technology for severe paralysis patients. First company to receive FDA approval for BCI human trials.",
        location: "New York, NY",
        website: "https://synchron.com",
        tags: ["bci", "medical", "therapeutics", "rehabilitation", "invasive"]
    },
    {
        name: "Muse by Interaxon",
        description: "Creating EEG-based meditation and sleep tracking headbands for consumer wellness.",
        location: "Toronto, Canada",
        website: "https://choosemuse.com",
        tags: ["wearables", "wellness", "consumer", "diagnostics", "noninvasive"]
    },
    {
        name: "Neurosity",
        description: "Building thought-powered computing devices for focus and productivity. Creator of the Crown device.",
        location: "New York, NY",
        website: "https://neurosity.co",
        tags: ["bci", "consumer", "wearables", "wellness", "noninvasive"]
    },
    {
        name: "Neuros Medical",
        description: "Developing neurostimulation technology for chronic pain management.",
        location: "Willoughby, OH",
        website: "https://neurosmedical.com",
        tags: ["neurostim", "medical", "therapeutics", "invasive"]
    },
    {
        name: "Cognito Therapeutics",
        description: "Pioneering light and sound therapy for treating neurodegenerative diseases.",
        location: "Cambridge, MA",
        website: "https://cognitotx.com",
        tags: ["neurostim", "medical", "therapeutics", "research"]
    },
    {
        name: "Flow Neuroscience",
        description: "Creating at-home depression treatment using brain stimulation technology. Product launched in EU/UK markets.",
        location: "Malmö, Sweden",
        website: "https://flowneuroscience.com",
        tags: ["neurostim", "mentalHealth", "consumer", "therapeutics", "noninvasive"]
    },
    {
        name: "BrainCo",
        description: "Developing EEG-based education solutions and prosthetic devices.",
        location: "Somerville, MA",
        website: "https://brainco.tech",
        tags: ["bci", "education", "consumer", "wearables", "noninvasive"]
    },
    {
        name: "Precision Neuroscience",
        description: "Developing ultra-thin, minimally invasive brain-computer interface technology using a flexible neural implant array.",
        location: "New York, NY",
        website: "https://precision-neuroscience.com",
        tags: ["bci", "medical", "therapeutics", "invasive"]
    },
    {
        name: "Blackrock Neurotech",
        description: "Creating brain-computer interface systems for research and clinical applications. FDA Breakthrough Device Designation recipient.",
        location: "Salt Lake City, UT",
        website: "https://blackrockneurotech.com",
        tags: ["bci", "medical", "research", "therapeutics", "invasive"]
    },
    {
        name: "Science Corp",
        description: "Building brain-computer interfaces with a focus on safety and scalability.",
        location: "San Francisco, CA",
        website: "https://science.xyz",
        tags: ["bci", "medical", "therapeutics", "invasive"]
    },
    {
        name: "Paradromics",
        description: "Developing high-data-rate brain-computer interfaces for treating serious diseases.",
        location: "Austin, TX",
        website: "https://paradromics.com",
        tags: ["bci", "medical", "research", "therapeutics", "invasive"]
    },
    {
        name: "ONWARD Medical",
        description: "Developing therapies to restore movement, independence, and health in people with spinal cord injury. FDA Breakthrough Device Designation recipient.",
        location: "Eindhoven, Netherlands",
        website: "https://onwd.com",
        tags: ["neurostim", "medical", "therapeutics", "rehabilitation", "invasive"]
    },
    {
        name: "Motif Neurotech",
        description: "Creating non-invasive brain stimulation technology for neurological conditions.",
        location: "Boston, MA",
        website: "https://motifneuro.com",
        tags: ["neurostim", "medical", "therapeutics", "noninvasive"]
    },
    {
        name: "INBRAIN Neuroelectronics",
        description: "Developing graphene-based neural interfaces for personalized therapeutic treatments.",
        location: "Barcelona, Spain",
        website: "https://inbrain-neuroelectronics.com",
        tags: ["bci", "medical", "therapeutics", "invasive"]
    },
    {
        name: "Cortical Labs",
        description: "Creating biological neural networks integrated with silicon computing.",
        location: "Melbourne, Australia",
        website: "https://corticallabs.com",
        tags: ["bci", "research", "ai"]
    },
    {
        name: "NextMind",
        description: "Developed non-invasive neural interfaces for real-time device control.",
        location: "Paris, France",
        tags: ["bci", "consumer", "wearables", "noninvasive"],
        acquisition: {
            acquiredBy: "Snap Inc.",
            year: 2022
        }
    },
    {
        name: "Emotiv",
        description: "Creating commercial EEG headsets for research and consumer applications.",
        location: "San Francisco, CA",
        website: "https://emotiv.com",
        tags: ["bci", "consumer", "research", "wearables", "noninvasive"]
    },
    {
        name: "g.tec",
        description: "Developing BCI systems and neurotechnology for research and medical applications.",
        location: "Schiedlberg, Austria",
        website: "https://gtec.at",
        tags: ["bci", "research", "medical", "diagnostics", "noninvasive"]
    },
    {
        name: "CTRL-labs",
        description: "Developed non-invasive neural interfaces for human-computer interaction.",
        location: "New York, NY",
        tags: ["bci", "wearables", "consumer"],
        acquisition: {
            acquiredBy: "Meta",
            year: 2019
        }
    },
    {
        name: "Neurable",
        description: "Developing brain-sensing headphones and audio technology for consumer applications.",
        location: "Boston, MA",
        website: "https://neurable.com",
        tags: ["bci", "consumer", "wearables", "noninvasive"]
    },
    {
        name: "Bitbrain",
        description: "Providing neurotechnology solutions for research and consumer applications.",
        location: "Zaragoza, Spain",
        website: "https://bitbrain.com",
        tags: ["bci", "research", "consumer", "wearables"]
    },
    {
        name: "Wyss Center",
        description: "Translating neuroscience innovations into clinical solutions through academic-industry collaboration.",
        location: "Geneva, Switzerland",
        website: "https://wysscenter.ch",
        tags: ["bci", "research", "medical", "therapeutics"]
    },
    {
        name: "NeuroNexus",
        description: "Manufacturing neural probes and electrodes for neuroscience research.",
        location: "Ann Arbor, MI",
        website: "https://neuronexus.com",
        tags: ["bci", "research", "medical", "invasive"]
    },
    {
        name: "MindMaze",
        description: "Developing FDA-cleared VR-based neural rehabilitation platforms for stroke and brain injury recovery.",
        location: "Lausanne, Switzerland",
        website: "https://mindmaze.com",
        tags: ["medical", "rehabilitation", "vr/ar", "therapeutics"]
    },
    {
        name: "Rune Labs",
        description: "Building FDA-cleared software platform to improve brain disease treatment and drug development, with focus on Parkinson's monitoring.",
        location: "San Francisco, CA",
        website: "https://runelabs.io",
        tags: ["ai", "medical", "diagnostics", "research"]
    },
    {
        name: "Beacon Biosignals",
        description: "Developing AI-powered EEG analysis platform for neurological and psychiatric drug development.",
        location: "Boston, MA",
        website: "https://beacon.bio",
        tags: ["ai", "diagnostics", "medical", "research"]
    },
    {
        name: "BIOS Health",
        description: "Developing neural interfaces and AI solutions for treating chronic diseases.",
        location: "Cambridge, UK",
        website: "https://bios.health",
        tags: ["ai", "medical", "therapeutics", "research"]
    },
    {
        name: "Neuropace",
        description: "Providing FDA-approved responsive neurostimulation system for the treatment of refractory epilepsy.",
        location: "Mountain View, CA",
        website: "https://neuropace.com",
        tags: ["neurostim", "medical", "therapeutics", "invasive"]
    },
    {
        name: "Neuroelectrics",
        description: "Developing non-invasive brain stimulation and monitoring solutions, with ongoing at-home clinical trials.",
        location: "Barcelona, Spain",
        website: "https://neuroelectrics.com",
        tags: ["neurostim", "medical", "research", "noninvasive"]
    },
    {
        name: "Axoft",
        description: "Developing ultra-soft neural implants for improved biocompatibility and long-term stability.",
        location: "Cambridge, MA",
        website: "https://axoft.co",
        tags: ["bci", "medical", "research", "invasive"]
    },
    {
        name: "MINT Neuro",
        description: "Developing high-density microelectrode arrays for brain-computer interfaces.",
        location: "San Francisco, CA",
        website: "https://mintneuro.com",
        tags: ["bci", "medical", "research", "invasive"]
    },
    {
        name: "Idun Technologies",
        description: "Developing dry-electrode EEG technology and brain-sensing earbuds.",
        location: "Zurich, Switzerland",
        website: "https://iduntechnologies.ch",
        tags: ["bci", "wearables", "consumer", "research", "noninvasive"]
    },
    {
        name: "Cognixion",
        description: "Building AI-powered communication solutions for people with disabilities using augmented reality interfaces.",
        location: "Santa Barbara, CA",
        website: "https://cognixion.com",
        tags: ["ai", "bci", "rehabilitation", "medical", "noninvasive", "vr/ar"]
    },
    {
        name: "Earable",
        description: "Creating sleep monitoring and cognitive enhancement technology through earbuds.",
        location: "Chicago, IL",
        website: "https://earable.ai",
        tags: ["wearables", "wellness", "consumer", "noninvasive"]
    },
    {
        name: "Sana Health",
        description: "Developing non-invasive neuromodulation technology for pain and sleep, with ongoing clinical trials.",
        location: "Denver, CO",
        website: "https://sana.io",
        tags: ["neurostim", "medical", "wellness", "noninvasive"]
    },
    {
        name: "Neuralief",
        description: "Creating FDA-cleared wearable neuromodulation solutions for migraine and depression.",
        location: "Tampa, FL",
        website: "https://neurolief.com",
        tags: ["neurostim", "medical", "therapeutics", "noninvasive"]
    },
    {
        name: "ClearPoint Neuro",
        description: "Developing FDA-cleared navigation systems and tools for minimally invasive neurosurgery.",
        location: "Solana Beach, CA",
        website: "https://clearpointneuro.com",
        tags: ["medical", "therapeutics", "invasive"]
    },
    {
        name: "NeuroOne",
        description: "Developing FDA-cleared high-definition, thin-film electrode technology for neural recording and stimulation.",
        location: "Eden Prairie, MN",
        website: "https://n1medical.com",
        tags: ["medical", "diagnostics", "therapeutics", "invasive"]
    },
    {
        name: "Neuphony",
        description: "Creating EEG wearables for meditation and mental wellness.",
        location: "Boston, MA",
        website: "https://neuphony.com",
        tags: ["wearables", "wellness", "consumer", "noninvasive"]
    },
    {
        name: "Arctop",
        description: "Developing AI-powered brain decoding technology for real-time cognitive state monitoring.",
        location: "Los Angeles, CA",
        website: "https://arctop.com",
        tags: ["ai", "bci", "diagnostics", "research"]
    },
    {
        name: "Elemind",
        description: "Creating non-invasive brain stimulation technology for sleep and cognitive enhancement.",
        location: "Boston, MA",
        website: "https://elemind.com",
        tags: ["neurostim", "consumer", "wellness", "noninvasive"]
    },
    {
        name: "iMotions",
        description: "Providing integrated biometric research platforms including EEG and eye tracking.",
        location: "Copenhagen, Denmark",
        website: "https://imotions.com",
        tags: ["research", "diagnostics", "consumer"],
        acquisition: {
            acquiredBy: "Smart Eye",
            year: 2021
        }
    }
];