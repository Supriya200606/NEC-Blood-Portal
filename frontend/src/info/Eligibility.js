const Eligibility = () => {
  return (
    <div className="bg-slate-200 text-black flex-1">
      <div className="p-5 md:p-20">
        <div className="items-start text-lg md:text-xl bg-white rounded-2xl font-serif p-5 md:p-10">
          <h1 className="text-2xl md:text-4xl text-red-600 font-bold">
            Who can donate Blood?
          </h1>

          <div>
            <h1 className="mt-5 md:mt-10 font-bold">General Health Requirements</h1>
            <p className="text-sm md:text-base">
              Must be generally healthy without any acute or chronic illnesses.
              Must have a minimum weight of 50 kg (110 lbs) for most adult donors.
            </p>
            <h1 className="mt-5 md:mt-10 font-bold">Age requirement:</h1>
            <p className="text-sm md:text-base">
              Typically 17–65 years, but this can vary based on local regulations.
            </p>
          </div>
          <div>
            <h1 className="mt-5 md:mt-10 font-bold">Blood Donation Requirements:</h1>
            <p className="text-sm md:text-base">
              Must have normal hemoglobin levels (usually above 12.5 g/dL for women and 13.5 g/dL for men).
            </p>
            <h1 className="mt-5 md:mt-10 font-bold">Interval:</h1>
            <p className="text-sm md:text-base">
              Must wait at least 56 days (8 weeks) between donations for whole blood. Physical and Medical Conditions:
            </p>
          </div>
          <div>
            <p className="text-sm md:text-base">
              People with tattoos and piercings can donate if they are healed and not within the last few months.
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 md:p-20">
        <div className="items-start text-lg md:text-xl p-5 md:p-20 rounded-2xl bg-red-500 font-serif">
          <h1 className="text-2xl md:text-4xl text-white font-bold">
            Who cannot donate blood?
          </h1>
          <div>
            <h1 className="mt-5 md:mt-10 font-bold">Health Conditions and Diseases:</h1>
            <p className="text-sm md:text-base">
              Blood Transfusion Recipients: Those who have recently received a blood transfusion should wait until doctor consultation. Others who suffer from blood-related diseases cannot give blood.
            </p>
            <div>
              <h1 className="mt-5 md:mt-10 font-bold">Heart Disease:</h1>
              <p className="text-sm md:text-base">
                People with a history of heart disease, including heart attack or stroke. Malaria: Recent history of malaria or travel to malaria-endemic regions without adequate treatment.
              </p>
              <h1 className="mt-5 md:mt-10 font-bold">Chronic Illnesses</h1>
              <p className="text-sm md:text-base">
                Conditions like sickle cell disease, hemophilia, or other blood disorders.
              </p>
              <h1 className="mt-5 md:mt-10 font-bold">Infectious Diseases</h1>
              <p className="text-sm md:text-base">
                People with active infections, including cold, flu, or other contagious conditions, should avoid donating until fully recovered.
              </p>
            </div>
            <div>
              <h1 className="mt-5 md:mt-10 font-bold">Lifestyle and High-Risk Behaviors:</h1>
              <p className="text-sm md:text-base">
                Drug Use: People who use intravenous drugs or have a history of drug abuse may be disqualified. High-risk sexual activity, such as unprotected sex with multiple partners, may disqualify you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Eligibility;
