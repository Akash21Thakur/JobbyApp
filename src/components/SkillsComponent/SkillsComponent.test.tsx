import { render, screen } from "@testing-library/react";
import { Provider } from "mobx-react";
import { I18nextProvider } from "react-i18next";
import SkillsComponent from ".";
import i18n from "../../i18n";
import { jobsStore } from "../../stores";
import { SkillsModel } from "../../stores/model/JobsModel";

jest.mock("query-string", () => ({
  stringify: jest.fn(),
  parse: jest.fn(),
}));

describe("Salary Range Component Testing", () => {
  const mockData: SkillsModel[] | undefined = [
    {
      name: "java",
      imageUrl: "demo.jpg1",
    },
    {
      name: "java",
      imageUrl: "demo.jpg2",
    },
    {
      name: "java",
      imageUrl: "demo.jpg22",
    },
    {
      name: "java",
      imageUrl: "demo.jpg",
    },
  ];
  test("if heading component is rendered correctly", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Provider jobsStore={jobsStore}>
          <SkillsComponent data={mockData} />
        </Provider>
      </I18nextProvider>
    );

    expect(screen.getByText(/Skills/)).toBeInTheDocument();
  });

  test("if skills count is correct", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Provider jobsStore={jobsStore}>
          <SkillsComponent data={mockData} />
        </Provider>
      </I18nextProvider>
    );

    const skillsElement = screen.getAllByTestId(/skillTestId/);
    expect(skillsElement.length).toBe(4);
  });
});
