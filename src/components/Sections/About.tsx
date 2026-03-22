import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImage0Src: profileImage0Src, profileImage1Src: profileImage1Src, description, aboutItems} = aboutData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div
        className={classNames('grid grid-cols-1 gap-y-4', {
          'md:grid-cols-12': !!profileImage0Src || !!profileImage1Src,
        })}>
        <div className={classNames('col-span-3 md:col-span-3 flex flex-col gap-y-6')}>
          {!!profileImage0Src && (
            <div className="flex justify-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
                <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImage0Src} />
              </div>
            </div>
          )}
          {!!profileImage1Src && (
            <div className="flex justify-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
                <Image alt="about-me-image-1" className="h-full w-full object-cover" src={profileImage1Src} />
              </div>
            </div>
          )}
        </div>
        <div className={classNames('col-span-9 md:col-span-9 flex flex-col gap-y-6')}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">About me</h2>
            <div
              className="prose prose-sm text-gray-300 sm:prose-base"
              dangerouslySetInnerHTML={{__html: description}}></div>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon, href}, idx) => (
              <li className="col-span-1 flex items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-white" />}
                <span className="text-sm font-bold text-white">{label}:</span>
                {href ? (
                  <span className="text-sm text-gray-300">
                    <a
                      href={href}
                      rel="noopener noreferrer"
                      style={{
                        color: 'rgb(209, 213, 219)',
                        fontWeight: 'bolder',
                      }}
                      target="_blank">
                      {text}
                    </a>
                  </span>
                ) : (
                  <span className="text-sm text-gray-300">{text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
