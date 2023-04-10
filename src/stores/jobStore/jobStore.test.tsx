import JobStore from ".";
import { ApiStatus } from "../types";

jest.mock("query-string", () => ({
  stringify: jest.fn(),
  parse: jest.fn(),
}));

describe("Jobstore Testing", () => {
  let jobStore: JobStore;
  beforeEach(() => {
    jobStore = new JobStore();
  });

  test(" Jobstore instance is defined", () => {
    expect(jobStore).toBeDefined();
  });

  describe("updateEmploymentList", () => {
    it("should add an item to selectedEmployment when checked is true", () => {
      jobStore.updateEmploymentList("Full Time", true);
      expect(jobStore.selectedEmployment).toContain("Full Time");
    });

    it("should remove an item from selectedEmployment when checked is false", () => {
      jobStore.selectedEmployment.add("Full Time");
      jobStore.updateEmploymentList("Full Time", false);
      expect(jobStore.selectedEmployment).not.toContain("Full Time");
    });
  });

  describe("updateSearchedText", () => {
    it("should update searchedText with the given value", () => {
      jobStore.updateSearchedText("frontend");
      expect(jobStore.searchedText).toBe("frontend");
    });
  });

  describe("updateSalary", () => {
    it("should update salary with the given value when val is different from the current value", () => {
      jobStore.updateSalary("200000");
      expect(jobStore.salary).toBe("200000");
    });
  });

  describe("fetchProfileDetails", () => {
    it("should set profileDetails and apiStatusProfileDetails when API call is successful", async () => {
      const mockProfileDetails = {
        name: "rahul",
        profile_image_url: "demo.png",
        short_bio: "This is demo bio",
      };
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ profile_details: mockProfileDetails }),
        } as Response)
      );
      await jobStore.fetchProfileDetails();
      expect(jobStore.profileDetails.name).toEqual(mockProfileDetails.name);
      expect(jobStore.profileDetails.profileImageUrl).toEqual(
        mockProfileDetails.profile_image_url
      );
      expect(jobStore.profileDetails.shortBio).toEqual(
        mockProfileDetails.short_bio
      );

      expect(jobStore.apiStatusProfileDetails).toBe(ApiStatus.SUCCESS);
    });

    it("should set apiStatusProfileDetails to FAILURE when API call fails", async () => {
      jest.spyOn(global, "fetch").mockImplementation(() => Promise.reject());
      await jobStore.fetchProfileDetails();
      expect(jobStore.apiStatusProfileDetails).toBe(ApiStatus.FAILURE);
    });

    it("should not make an API call if apiStatusProfileDetails is already SUCCESS", async () => {
      jobStore.apiStatusProfileDetails = ApiStatus.SUCCESS;
      const spy = jest.spyOn(global, "fetch");
      await jobStore.fetchProfileDetails();
      expect(spy).not.toHaveBeenCalled();
    });
  });

 
});

// describe("JobStore", () => {
// //   describe("fetchProfileDetails", () => {
// //     it("should set profileDetails and apiStatusProfileDetails to success if API call is successful", async () => {
// //       const store = new JobStore();

// //       // Mock UserProfileDetailServiceApi to return successful response
// //       jest
// //         .spyOn(UserProfileDetailServiceApi.prototype, "getUserDetails")
// //         .mockResolvedValue({
// //           profile_details: {
// //             name: "John Doe",
// //             profile_image_url: "john.doe@example.com",
// //             short_bio: ''
// //           },
// //         });

// //       await store.fetchProfileDetails();

// //       expect(store.profileDetails.name).toBe("John Doe");
// //       expect(store.apiStatusProfileDetails).toBe(ApiStatus.SUCCESS);
// //     });
// //   });
//   jest.mock("../../service/UserProfileService/index.api");

// describe('JobStore', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   if (typeof JobStore === 'undefined') {
//     throw new Error('JobStore class is not defined');
//   }

//   it('should set profileDetails and apiStatusProfileDetails to success if API call is successful', async () => {
//     // Mock UserProfileDetailServiceApi to return successful response
//     UserProfileDetailServiceApi.prototype.getUserDetails = jest.fn().mockResolvedValue({
//       profile_details: {
//         name: "John Doe",
//         email: "johndoe@example.com"
//       }
//     });

//     const jobStore = new JobStore();
//     await jobStore.fetchProfileDetails();

//     // expect(UserProfileDetailServiceApi.prototype.getUserDetails).toHaveBeenCalledTimes(1);
//     expect(jobStore.apiStatusProfileDetails).toBe(ApiStatus.FAILURE);
//     // expect(jobStore.profileDetails.name).toBe("John Doe");
//     // expect(jobStore.profileDetails.email).toBe("johndoe@example.com");
//   });
// });
// });
