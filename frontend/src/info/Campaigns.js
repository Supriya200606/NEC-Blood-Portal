import React from "react";
import cam from "../assets/camktm.jpg";
import cam1 from "../assets/cam1.jpg";

import cam2 from "../assets/cam2.jpg";

import cam3 from "../assets/cam3.jpeg";

import cam4 from "../assets/cam4.webp";
import cam5 from "../assets/cam5.webp";
import cam6 from "../assets/cam6.webp";
import cam7 from "../assets/cam7.webp";

const Campaigns = () => {
  const campaigns = [
    {
      type: "campaign",
      poster: cam,
      description:
        "Join us to save lives by donating blood at the Central NRCS Blood Bank.",
      time: "10:00 AM - 4:00 PM",
      venue: "Soaltee-Mode, Kathmandu",
    },
    {
      type: "campaign",
      poster: cam2,
      description:
        "Blood donation drive organized by Patan Hospital Blood Bank.",
      time: "9:00 AM - 3:00 PM",
      venue: "Patan, Lalitpur",
    },
    {
      type: "campaign",
      poster: cam3,
      description: "Blood donation camp at Pokhara Blood Bank.",
      time: "10:30 AM - 4:30 PM",
      venue: "Pokhara, Kaski",
    },
    {
      type: "campaign",
      poster: cam4,
      description:
        "Support Bharatpur Blood Bank in their upcoming blood drive.",
      time: "11:00 AM - 5:00 PM",
      venue: "Bharatpur, Chitwan",
    },
    {
      type: "campaign",
      poster: cam1,
      description: "Participate in the blood drive at Birtamod Blood Bank.",
      time: "9:30 AM - 3:30 PM",
      venue: "Birtamod, Jhapa",
    },
  ];

  const ongoingCampaigns = [
    {
      poster: cam5,
      description:
        "Ongoing blood donation drive at Mechi Zonal Hospital Blood Bank.",
      time: "10:00 AM - 5:00 PM",
      venue: "Bhadrapur, Jhapa",
    },
    {
      poster: cam2,
      description: "Blood collection camp at Birtamod Blood Bank.",
      time: "9:00 AM - 3:00 PM",
      venue: "Birtamod, Jhapa",
    },
  ];

  const upcomingCampaigns = [
    {
      poster: cam6,
      description: "Upcoming blood donation event at Birtamod Blood Bank.",
      time: "Next Sunday, 9:00 AM - 4:00 PM",
      venue: "Birtamod, Jhapa",
    },
    {
      poster: cam7,
      description: "Blood donation program at Mechi Zonal Hospital.",
      time: "Next Saturday, 10:00 AM - 5:00 PM",
      venue: "Bhadrapur, Jhapa",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-200 text-black p-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-2xl font-bold text-red-600 mb-6">Campaigns</h2>
        <section className="bg-white shadow-lg rounded-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign, index) => (
              <div
                key={index}
                className="bg-red-50 border border-red-500 rounded-lg p-4"
              >
                <img
                  src={campaign.poster}
                  alt="Campaign Poster"
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <p className="text-sm text-gray-600 mb-2">
                  {campaign.description}
                </p>
                <p className="text-sm font-medium text-gray-700">
                  Time: {campaign.time}
                </p>
                <p className="text-sm font-medium text-gray-700">
                  Venue: {campaign.venue}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-600 mb-6">
            Ongoing Campaigns
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ongoingCampaigns.map((ongoing, index) => (
              <div
                key={index}
                className="bg-red-50 border border-red-500 rounded-lg p-4"
              >
                <img
                  src={ongoing.poster}
                  alt="Ongoing Campaign Poster"
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <p className="text-sm text-gray-600 mb-2">
                  {ongoing.description}
                </p>
                <p className="text-sm font-medium text-gray-700">
                  Time: {ongoing.time}
                </p>
                <p className="text-sm font-medium text-gray-700">
                  Venue: {ongoing.venue}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-600 mb-6">
            Upcoming Campaigns
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {upcomingCampaigns.map((upcoming, index) => (
              <div
                key={index}
                className="bg-red-50 border border-red-500 rounded-lg p-4"
              >
                <img
                  src={upcoming.poster}
                  alt="Upcoming Campaign Poster"
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <p className="text-sm text-gray-600 mb-2">
                  {upcoming.description}
                </p>
                <p className="text-sm font-medium text-gray-700">
                  Time: {upcoming.time}
                </p>
                <p className="text-sm font-medium text-gray-700">
                  Venue: {upcoming.venue}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Campaigns;
