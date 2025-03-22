import { RxDotFilled } from 'react-icons/rx';
import SectionHeading from '../../components/SectionHeading';
import data from '../../utility/data.json';
const PrivacyPage = () => {
  return (
    <div>
      <div className="container py-10">
        <SectionHeading title="Privacy Policy" className="justify-start" />
        <div className="mt-6">
          {data.privacy_policy.map((section, index) => (
            <section key={index} className="mb-6">
              <h2 className="text-lg font-bold">
                {index + 1}. {section.title}
              </h2>

              {Array.isArray(section.content) ? (
                section.content.map((item, itemIndex) => {
                  if (typeof item === 'string') {
                    return (
                      <p
                        key={itemIndex}
                        className="mt-1 flex ps-5 text-gray-600"
                      >
                        <RxDotFilled
                          size={16}
                          className="me-1 mt-1 w-[20px] text-primary"
                        />
                        {item}
                      </p>
                    );
                  } else if (item.title && item.content) {
                    return (
                      <div key={itemIndex} className="mt-2 px-5">
                        <h3 className="font-semibold">
                          {index + 1}.{itemIndex + 1}. {item.title}
                        </h3>
                        <p className="mt-1 flex ps-5 text-gray-600">
                          <RxDotFilled
                            size={16}
                            className="me-1 mt-1 w-[20px] text-primary"
                          />
                          {item.content}
                        </p>
                      </div>
                    );
                  }
                  return null;
                })
              ) : (
                <p key={index} className="mt-1 flex ps-5 text-gray-600">
                  <RxDotFilled
                    size={16}
                    className="me-1 mt-1 w-[20px] text-primary"
                  />
                  {section.content}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
