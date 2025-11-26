import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$82/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "UI/UX Developer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      pay: "$75/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "3 days ago",
      post: "React.js Engineer",
      tag1: "Contract",
      tag2: "Junior Level",
      pay: "$60/hr",
      location: "Remote",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Full Stack Developer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$78/hr",
      location: "Seattle, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "4 days ago",
      post: "Web Engineer",
      tag1: "Part-Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Los Angeles, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "Frontend Developer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Dublin, Ireland",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "2 weeks ago",
      post: "UI Engineer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Berlin, Germany",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "10 days ago",
      post: "Frontend Systems Engineer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "California, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      companyName: "Adobe",
      datePosted: "1 day ago",
      post: "Junior Frontend Developer",
      tag1: "Internship",
      tag2: "Entry Level",
      pay: "$35/hr",
      location: "Noida, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/oracle.com",
      companyName: "Oracle",
      datePosted: "3 weeks ago",
      post: "Software UI Developer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Austin, USA",
    },
  ];
  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              location={elem.location}
              pay={elem.pay}
              companyLogo={elem.brandLogo}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
