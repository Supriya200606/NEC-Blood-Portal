const Eligibility = () => {
  return (
    <div className="bg-slate-200 text-black flex-1">
      <div className=" p-20">
        <div className="items-start text-xl bg-white rounded-2xl font-serif p-10 ">
          <h1 className="text-4xl text-red-600 font-bold">
            Who can donate Blood?
          </h1>

          <div>
            <h1 className="mt-10 font-bold">General Health Requirements</h1>
            Must be generally healthy without any acute or chronic illnesses.
            Must have a minimum weight of 50 kg (110 lbs) for most adult donors.
            <h1 className="mt-10 font-bold">
              Age requirement:
            </h1> Typically 17–65 years, but this can vary based on local
            regulations.
          </div>
          <div>
            <h1 className="mt-10 font-bold">Blood Donation Requirements:</h1>
            Must have normal hemoglobin levels (usually above 12.5 g/dL for
            women and 13.5 g/dL for men).
            <h1 className="mt-10 font-bold">
              Interval:
            </h1> Must wait at least 56 days (8 weeks) between donations for
            whole blood. Physical and Medical Conditions:
          </div>
          <div>
            People with tattoos and piercings can donate if they are healed and
            not within the last few months.
          </div>
        </div>
      </div>

      <div className="p-20">
        <div className="items-start text-xl p-20 rounded-2xl bg-red-500 font-serif">
          <h1 className="text-4xl text-white font-bold">
            Who cannot donate blood?
          </h1>
          <div>
            <h1 className="mt-10 font-bold">Health Conditions and Diseases:</h1>
            Blood Transfusion Recipients: Those who have recently received a
            blood transfusion should wait until doctor consulation. Other who
            suffer from blood related dieseases cannot give blood.
            <div>
              {" "}
              <h1 className="mt-10 font-bold"> Heart Disease: </h1>People with a
              history of heart disease, including heart attack or stroke.
              Malaria: Recent history of malaria or travel to malaria-endemic
              regions without adequate treatment. Chronic
              <h1 className="mt-10 font-bold"> Illnesses</h1> Conditions like
              sickle cell disease, hemophilia, or other blood disorders.{" "}
              <h1 className="mt-10 font-bold">Infectious Diseases</h1> People
              with active infections, including cold, flu, or other contagious
              conditions, should avoid donating until fully recovered.
            </div>
            <div>
              <h1 className="mt-10 font-bold">
                Lifestyle and High-Risk Behaviors:
              </h1>{" "}
              Drug Use: People who use intravenous drugs or have a history of
              drug abuse may be disqualified. High-risk sexual activity, such as
              unprotected sex with multiple partners, may disqualify you.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Eligibility;
