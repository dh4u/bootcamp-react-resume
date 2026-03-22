import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {SectionId, typedPortfolioItems} from '../../data/data';
import {CannabisProject, PaidProject, Project} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import GithubIcon from '../Icon/GithubIcon';
import Section from '../Layout/Section';

// ─── Main component ──────────────────────────────────────────────────────────

const TypedPortfolio: FC = memo(() => {
  const {cannabisProjects, paidProjects, bootcampProjects} = typedPortfolioItems;

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-12">
        {/* ── Cannabis Industry ─────────────────────────────────────────── */}
        {cannabisProjects.length > 0 && (
          <div className="flex flex-col gap-y-6">
            <div className="self-center text-center">
              <h2 className="text-xl font-bold text-white">Cannabis Industry — Enterprise Platform</h2>
              <p className="mt-2 max-w-2xl text-sm text-neutral-400">
                Production software engineering at a confidential cannabis industry employer (2021–present). UI shown
                anonymized to protect employer confidentiality.
              </p>
            </div>
            <div className="columns-1 gap-4 sm:columns-2">
              {cannabisProjects.map(project => (
                <CannabisProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* ── CLR / Paid Work ───────────────────────────────────────────── */}
        {paidProjects.length > 0 && (
          <div className="flex flex-col gap-y-6">
            <div className="self-center text-center">
              <h2 className="text-xl font-bold text-white">The Eye — Council for Logistics Research</h2>
              <p className="mt-2 max-w-2xl text-sm text-neutral-400">
                Over 11 years, built and maintained an enterprise intranet from the ground up serving CLR and US Air
                Force clients. Stack: ColdFusion, JavaScript, HTML, CSS, MS SQL Server.
              </p>
            </div>
            <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
              {paidProjects.map(project => (
                <PaidProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* ── Bootcamp Projects ─────────────────────────────────────────── */}
        <div className="flex flex-col gap-y-6">
          <div className="self-center text-center">
            <h2 className="text-xl font-bold text-white">Bootcamp Projects</h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-400">
              Projects completed during the HyperionDev Full Stack Web Developer bootcamp (2020). Click to view a demo
              or source on GitHub.
            </p>
          </div>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-2">
            {bootcampProjects.map(project => (
              <BootcampProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
});

TypedPortfolio.displayName = 'TypedPortfolio';
export default TypedPortfolio;

// ─── Cannabis project card ────────────────────────────────────────────────────

const CannabisProjectCard: FC<{project: CannabisProject}> = memo(({project}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) setMobile(true);
  }, []);

  useDetectOutsideClick(ref as unknown as React.RefObject<HTMLAnchorElement>, () => setShowOverlay(false));

  const handleClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (mobile && !showOverlay) {
        e.preventDefault();
        setShowOverlay(true);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <div className="mb-6 break-inside-avoid overflow-hidden rounded bg-neutral-700">
      {/* Image with hover overlay */}
      <div className="group relative" onClick={handleClick} ref={ref}>
        <Image
          alt={project.title}
          className="w-full object-cover"
          height={200}
          src={project.image}
          unoptimized
          width={400}
        />
        <div
          className={classNames(
            'absolute inset-0 flex flex-col items-center justify-center bg-neutral-900/95 p-4 transition-opacity duration-300',
            mobile ? (showOverlay ? 'opacity-100' : 'opacity-0') : 'opacity-0 group-hover:opacity-100',
          )}>
          <p className="text-center text-sm font-bold text-white">{project.title}</p>
          <p className="mt-1 text-center text-xs text-neutral-300">{project.overlayText}</p>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4">
        <div className="flex items-center gap-x-3">
          <h3 className="flex-1 text-sm font-bold text-white">{project.title}</h3>
          {project.confidential && (
            <span className="rounded bg-neutral-600 px-2 py-0.5 text-xs font-semibold text-neutral-300">
              Confidential
            </span>
          )}
        </div>

        {/* Technology */}
        {project.technology && (
          <p className="mt-2 text-xs text-neutral-400">
            <span className="font-semibold text-neutral-300">Technologies: </span>
            {project.technology}
          </p>
        )}

        {/* Features */}
        {project.features.length > 0 && (
          <ul className="mt-2 list-inside list-disc space-y-0.5">
            {project.features.map(f => (
              <li className="text-xs text-neutral-400" key={f.feature}>
                {f.feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
});

// ─── CLR thumbnail card ───────────────────────────────────────────────────────

const PaidProjectCard: FC<{project: PaidProject}> = memo(({project}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) setMobile(true);
  }, []);

  useDetectOutsideClick(ref as unknown as React.RefObject<HTMLAnchorElement>, () => setShowOverlay(false));

  const handleClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (mobile && !showOverlay) {
        e.preventDefault();
        setShowOverlay(true);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <div className="group relative mb-4 break-inside-avoid overflow-hidden rounded" onClick={handleClick} ref={ref}>
      {/* Thumbnail */}
      <Image
        alt={project.title}
        className="w-full object-cover"
        height={200}
        src={project.image}
        unoptimized
        width={300}
      />
      {/* Hover overlay */}
      <div
        className={classNames(
          'absolute inset-0 flex flex-col items-center justify-center bg-neutral-900/95 p-3 transition-opacity duration-300',
          mobile ? (showOverlay ? 'opacity-100' : 'opacity-0') : 'opacity-0 group-hover:opacity-100',
        )}>
        <p className="text-center text-xs font-bold text-white">{project.title}</p>
        <p className="mt-1 text-center text-xs text-neutral-300">{project.description}</p>
      </div>
      {/* Label below image */}
      <p className="mt-1 px-1 text-xs font-semibold text-neutral-300">{project.title}</p>
    </div>
  );
});

// ─── Bootcamp project card ────────────────────────────────────────────────────

const BootcampProjectCard: FC<{project: Project}> = memo(({project}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const primaryUrl = project.demo || project.GitHub;

  useEffect(() => {
    if (isMobile) setMobile(true);
  }, []);

  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        e.preventDefault();
        setShowOverlay(true);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <div className="mb-6 break-inside-avoid overflow-hidden rounded bg-neutral-700">
      {/* Image with overlay */}
      <div className="group relative">
        <Image
          alt={project.title}
          className="w-full object-cover"
          height={200}
          src={project.image}
          unoptimized
          width={400}
        />
        <a
          className={classNames(
            'absolute inset-0 flex flex-col items-center justify-center bg-neutral-900/95 p-4 transition-opacity duration-300',
            mobile ? (showOverlay ? 'opacity-100' : 'opacity-0') : 'opacity-0 group-hover:opacity-100',
          )}
          href={primaryUrl}
          onClick={handleItemClick}
          ref={linkRef}
          rel="noopener noreferrer"
          target="_blank">
          <p className="text-center text-sm font-bold text-white">{project.title}</p>
          <p className="mt-1 text-center text-xs text-neutral-300">{project.overlayText}</p>
          <ArrowTopRightOnSquareIcon className="absolute bottom-2 right-2 h-4 w-4 text-white" />
        </a>
      </div>

      {/* Card body */}
      <div className="p-4">
        {/* Title + links */}
        <div className="flex items-center gap-x-3">
          <h3 className="flex-1 text-sm font-bold text-white">{project.title}</h3>
          {project.GitHub && (
            <a
              aria-label={`${project.title} GitHub`}
              className="text-neutral-400 hover:text-white transition-colors"
              href={project.GitHub}
              rel="noopener noreferrer"
              target="_blank">
              <GithubIcon className="h-5 w-5" />
            </a>
          )}
          {project.demo && (
            <a
              aria-label={`${project.title} demo`}
              className="text-neutral-400 hover:text-white transition-colors"
              href={project.demo}
              rel="noopener noreferrer"
              target="_blank">
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </a>
          )}
        </div>

        {/* Technology */}
        {project.technology && (
          <p className="mt-2 text-xs text-neutral-400">
            <span className="font-semibold text-neutral-300">Technologies: </span>
            {project.technology}
          </p>
        )}

        {/* Features */}
        {project.features.length > 0 && project.features[0].feature && (
          <ul className="mt-2 list-inside list-disc space-y-0.5">
            {project.features.map(f => (
              <li className="text-xs text-neutral-400" key={f.feature}>
                {f.feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
});
