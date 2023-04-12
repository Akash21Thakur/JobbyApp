export enum ApiStatus {
  INITIAL,
  LOADING,
  SUCCESS,
  FAILURE,
}

export interface ProfileDetailsType {
  name: string;
  profile_image_url: string;
  short_bio: string;
}

export interface ProfileDetailsFetchType {
  profile_details: ProfileDetailsType;
}

export interface JobsTypes {
  company_logo_url: string;
  employment_type: string;
  id: string;
  job_description: string;
  location: string;
  package_per_annum: string;
  rating: number;
  title: string;
}

export interface JobsFetchType {
  jobs: JobsTypes[];
}

export interface LifeAtCompanyType {
  description: string;
  image_url: string;
}

export interface JobDetailType extends JobsTypes {
  company_website_url: string;
  skills?: SkillsType[];

  life_at_company: LifeAtCompanyType;
}

export interface SkillsType {
  name: string;
  image_url: string;
}

export interface JobDataTypes {
  job_details: JobDetailType;
  similar_jobs: JobsTypes[];
}


