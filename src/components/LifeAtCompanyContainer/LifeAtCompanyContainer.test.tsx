import { render, screen } from "@testing-library/react";
import { Provider } from "mobx-react";
import { I18nextProvider } from "react-i18next";
import LifeAtCompanyContainer from ".";
import i18n from "../../i18n";

describe("LifeAtCompany", () => {
  const mockData = {
    description:
      "Our core philosophy is people over process. Our culture has been instrumental to our success. It has helped us attract and retain stunning colleagues, making work here more satisfying. Entertainment, like friendship, is a fundamental human need, and it changes how we feel and gives us common ground. We want to entertain the world.",
    imageUrl: "imageurl",
  };
  test("check is Life At Company Renders", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LifeAtCompanyContainer data={mockData} />
      </I18nextProvider>
    );
    // screen.debug();

    expect(screen.getByText('Life At Company')).toBeInTheDocument();
    expect(screen.getByTestId('lifePara')).toBeInTheDocument();
    expect(screen.getByAltText('office-img')).toBeInTheDocument();
    expect(screen.getByTestId('lifeAtCompanyWrapperId')).toBeInTheDocument();
  });
});  
  