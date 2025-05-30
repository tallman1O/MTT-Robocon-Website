import { FocusCards } from "@/components/ui/focus-cards";

export function AlumniSection() {
  const cards = [
    {
      title: "Soham Patil",
      src: "/alumni/Soham-Patil.jpg",
      designation: "MS at RRC, IIITH",
      location: "Hyderabad",
      linkedIn: "https://www.linkedin.com/in/sohampatil2560/",
    },
    {
      title: "Siddhant Vaidya",
      src: "/alumni/Siddhant-Vaidya.jpg",
      designation: "Senior Quant Analyst",
      location: "Pune",
      linkedIn: "https://www.linkedin.com/in/siddhant-vaidya/",
    },
    {
      title: "Nishant Jain",
      src: "/alumni/Nishant-Jain.jpg",
      designation: "Software Developer",
      location: "Mumbai",
      linkedIn: "https://www.linkedin.com/in/nishant-jain01/",
    },
    {
      title: "Paresh Chaudhary",
      src: "/alumni/Paresh-Chaudhary.jpg",
      designation: "Researcher at University of Washington",
      location: "Seattle",
      linkedIn: "https://www.linkedin.com/in/pareshrchaudhary/",
    },
    {
      title: "Akash Kulkarni",
      src: "/alumni/Akash-Kulkarni.jpg",
      designation: "Master's in Robotic systems engineering at RWTH Aachen University",
      location: "Germany",
      linkedIn: "https://www.linkedin.com/in/akashkulkarni1998",
    },
    {
      title: "Suman Mandal",
      src: "/alumni/Suman-Mandal.jpg",
      designation: "Associate consultant at Oracle",
      location: "Pune",
      linkedIn: "http://linkedin.com/in/suman-mandal05",
    },
    {
      title: "Yashas Shetty",
      src: "/alumni/Yashas-Shetty.jpg",
      designation: "Sr Electrical Engineer at Medtronic",
      location: "New Haven, USA",
      linkedIn: "https://www.linkedin.com/in/yashas-shetty-046858168/",
    },
    {
      title: "Gaurav Raj",
      src: "/alumni/Gaurav-Raj.jpg",
      designation: "Senior Software Engineer at Citi",
      location: "Pune",
      linkedIn: "https://www.linkedin.com/in/gauravraj8576/",
    },
    {
      title: "Abhinav Warrier",
      src: "/alumni/Abhinav-Warrier.jpg",
      designation: "Co-Founder of Rightbot",
      location: "New York",
      linkedIn: "https://www.linkedin.com/in/abhinavwarrier/",
    },
    {
      title: "Samarth Kalluraya",
      src: "/alumni/Samarth-Kalluraya.png",
      designation: "Ph.D in Robotics at Washington University in St. Louis",
      location: "St. Louis, USA",
      linkedIn: "https://www.linkedin.com/in/samarth-kalluraya/",
    }
  ];
  return <FocusCards cards={cards} />;
}
