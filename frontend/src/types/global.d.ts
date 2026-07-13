import { JSX } from "preact";
import { ReactNode } from "preact/compat";

declare global {
  interface MultiLangItem {
    [key: string]: string;
  }

  type IconType = ComponentType<{
    width?: number;
    height?: number;
    color?: string;
  }>;

  type RowItem = {
    text: string;
    icon: IconType;
    height: string;
    marginTop?: string;
    isSection?: boolean;
    component?: ReactNode;
    bgColor?: string;
  };

  type PropertyItem = {
    text: string;
    value: number;
  };

  interface MeItem {
    _id: string;
    address: string;
    certificates: CertificateItem[];
    city: string;
    email: string;
    high_school: HighSchoolItem;
    languages: {
      _id: string;
      name: MultiLangItem;
      value: number;
    }[];
    name: string;
    phone: string;
    postcode: string;
    surname: string;
  }

  interface HighSchoolItem {
    address: string;
    city: string;
    from: number;
    name: MultiLangItem;
    postcode: string;
    profesion: MultiLangItem;
    to: number;
  }

  interface CertificateItem {
    _id: string;
    name: string;
    source: string;
    year: string;
  }

  interface AddressItem {
    address: string;
    city: string;
    postcode: string;
  }

  interface AboutItem {
    _id: string;
    name: string;
    surname: string;
    position: string;
    about_text_1: MultiLangItem;
    about_text_2: MultiLangItem;
  }

  interface ProjectItem {
    _id: string;
    name: string;
    description: MultiLangItem;
    tech_stack: string[];
    link?: string;
  }

  interface WorkItem {
    _id: string;
    position: string;
    company: string;
    from: string;
    to: string;
    projects: ProjectItem[];
  }

  interface SkillItem {
    _id: string;
    name: string;
    value: number;
  }

  interface SkillsGroup {
    [key: string]: SkillItem[];
  }

  interface ResumeData {
    me: MeItem;
    about: AboutItem;
    works: WorkItem[];
    skills: SkillsGroup;
  }
}
