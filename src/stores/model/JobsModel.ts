import {
  JobDataTypes,
  JobDetailType,
  JobsTypes,
  LifeAtCompanyType,
  SkillsType,
} from "../types";

export class JobsModel {
  companyLogoUrl: string;
  employmentType: string;
  id: string;
  jobDescription: string;
  location: string;
  packagePerAnnum: string;
  rating: number;
  title: string;

  constructor(data: JobsTypes) {
    this.companyLogoUrl = data.company_logo_url;
    this.employmentType = data.employment_type;
    this.id = data.id;
    this.jobDescription = data.job_description;
    this.location = data.location;
    this.packagePerAnnum = data.package_per_annum;
    this.rating = data.rating;
    this.title = data.title;
  }
}

export class SkillsModel {
  name: string;
  imageUrl: string;

  constructor(data: SkillsType) {
    this.name = data.name;
    this.imageUrl = data.image_url;
  }
}

export class LifeAtCompanyModel {
  description!: string;
  imageUrl!: string;

  constructor(data: LifeAtCompanyType) {
    this.description = data.description;
    this.imageUrl = data.image_url;
  }
}

export class JobDetailModel extends JobsModel {
  companyWebsiteUrl: string;
  skills?: SkillsModel[];

  lifeAtCompany: LifeAtCompanyModel;

  constructor(data: JobDetailType) {
    super(data);
    this.lifeAtCompany = new LifeAtCompanyModel(data.life_at_company);
    this.companyWebsiteUrl = data.company_website_url;
    this.skills = data.skills?.map((each) => new SkillsModel(each));
  }
}

export class JobDataModel {
  jobDetails!: JobDetailModel;
  similarJobs!: JobsModel[];

  constructor(data: JobDataTypes) {
    this.jobDetails = new JobDetailModel(data.job_details);
    this.similarJobs = data.similar_jobs.map((each) => new JobsModel(each));
    //  this.similarJobs=data.similar_jobs;
  }
}

// class ExtendedJob

// export default JobsModel
