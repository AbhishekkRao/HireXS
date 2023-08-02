import LoggedInContainer from "../containers/LoggedInContainer";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import TextInput from "../components/TextInput";
import { useState, useRef } from "react";
import ClipboardJS from "clipboard";
// import { Link, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { Card, Typography } from "@material-tailwind/react";
import { jobData } from "./JobDetails";

const Jobid = () => {
  const job_id = useParams().jobid;
  const url = window.location.href;

  const [copySuccess, setCopySuccess] = useState("")
  const textAreaRef = useRef(null)

  async function copyToClip() {
    await navigator.clipboard.writeText(url);
    setCopySuccess("Copied");
  }

  return (
    <LoggedInContainer curActiveScreen="home">
      <div className="flex flex-row">
        <div className="w-3/5 h-full bg-color5 ml-10 mr-16 p-5 rounded-xl text-white">
          <div className="flex items-center">
            <div className="text-2xl font-semibold">
              Senior Software Engineer
            </div>
            <div className="ml-3">
              (Job ID : {job_id})
            </div>
          </div>
          <div>
            <div className="font-semibold mt-3">Job Description</div>
            <div className="mt-1">
              Drives the execution of multiple business plans and projects by identifying customer and operational needs; developing and communicating business plans and priorities; removing barriers and obstacles that impact performance; providing resources; identifying performance standards; measuring progress and adjusting performance accordingly; developing contingency plans; and demonstrating adaptability and supporting continuous learning. Provides supervision and development opportunities for associates by selecting and training; mentoring; assigning duties; building a team-based work environment; establishing performance expectations and conducting regular performance evaluations; providing recognition and rewards; coaching for success and improvement; and ensuring diversity awareness. Promotes and supports company policies, procedures, mission, values, and standards of ethics and integrity by training and providing direction to others in their use and application; ensuring compliance with them; and utilizing and supporting the Open Door Policy. Ensures business needs are being met by evaluating the ongoing effectiveness of current plans, programs, and initiatives; consulting with business partners, managers, co-workers, or other key stakeholders; soliciting, evaluating, and applying suggestions for improving efficiency and cost-effectiveness; and participating in and supporting community outreach events.
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-start mt-1">
              <span className="font-semibold">Role :</span>&nbsp; Front-end Developer
            </div>
            <div className="flex items-center justify-start mt-1">
              <span className="font-semibold">Department :</span>&nbsp; Engineering
            </div>
            <div className="flex items-center justify-start mt-1">
              <span className="font-semibold">Employment Type :</span>&nbsp; Full Time, Permanent
            </div>
            <div className="flex items-center justify-start mt-1">
              <span className="font-semibold">Role Category :</span>&nbsp; Software Development
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center font-semibold justify-start mt-1">Education</div>
            <div className="flex items-center justify-start mt-1">
              <span className="font-semibold">UG :</span>&nbsp; Any Graduate
            </div>
            <div className="flex items-center justify-start mt-1">
              <span className="font-semibold">PG :</span>&nbsp; Any Graduate
            </div>
          </div>
          <div>
            <div className="font-semibold mt-3">Required Skills</div>
            <div className="mt-1">
              lorem Ipsum is simply dummy text; it is simply a placeholder for others to connect real people with.
            </div>
          </div>
        </div>
        <div>
          <div className="h-12 bg-white rounded-2xl text-color1 px-20 font-medium text-lg flex items-center justify-center">
            Apply
          </div>
          <div className="text-white mt-4 flex">
            <Icon icon="mdi:location" className="pt-1 text-xl" />
            <div className="pl-1">Hyderabad</div>
          </div>
          <div className="text-white mt-4 flex">
            <Icon icon="fa:suitcase" className="pt-1" />
            <div className="pl-2">Full Time</div>
          </div>
          <div className="text-white mt-4 flex">
            <Icon icon="ri:graduation-cap-fill" className="pt-1 text-xl" />
            <div className="pl-2">0 - 2 yrs</div>
          </div>
          <div className="text-white mt-4 flex">
            <Icon icon="ic:baseline-email" className="pt-1 text-xl" />
            <div className="pl-2">Posted: 30 Jul 2023</div>
          </div>
          <div className="text-white mt-4 flex">
            <Icon icon="ic:baseline-email" className="pt-1 text-xl" />
            <div className="pl-2">Expires: 01 Aug 2023</div>
          </div>
          <div className="text-white mt-4 flex">
            <Icon icon="material-symbols:share" className="pt-1 text-xl" />
            <div className="pl-2">
              <button onclick={copyToClip}>
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/5 h-full bg-color5 ml-10 mt-5 p-5 rounded-xl text-white">
        <div className="flex">
          <div>
            Upload your resume
          </div>
          <div className="bg-white ml-3 text-black rounded-2xl px-5">
            choose
          </div>
        </div>
        <TextInput
          label='University/ College Name'
          placeholder='University/ College Name'
          className='my-6'
        />
        <TextInput
          label='CGPA'
          placeholder='CGPA'
          className='my-6'
        />
      </div>
    </LoggedInContainer>
  );
};

export default Jobid;

