// import React from "react";
// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import UserProfileForm from "./index";

// jest.mock("../../utils/hooks/fetchInfoFromAPI", () => ({
//   useQueryFetchAPI: jest.fn(),
// }));

// jest.mock("../../utils/hooks/postInfoToAPI", () => ({
//   usePostAPI: jest.fn(),
// }));

// describe("UserProfileForm", () => {
//   it("renders loading spinner when data is loading", () => {
//     useQueryFetchAPI.mockReturnValue({ isLoading: true });
//     render(<UserProfileForm />);
//     const loadingSpinner = screen.getByTestId("loading-spinner");
//     expect(loadingSpinner).toBeInTheDocument();
//   });

//   it("renders error message when there is an error", () => {
//     useQueryFetchAPI.mockReturnValue({ isError: true });

//     render(<UserProfileForm />);

//     const errorMessage = screen.getByTestId("error-message");
//     expect(errorMessage).toBeInTheDocument();
//   });

//   it("submits the form when Save button is clicked", async () => {
//     useQueryFetchAPI.mockReturnValue({ data: {} });

//     usePostAPI.mockReturnValue({
//       mutateAsync: jest.fn().mockResolvedValue({}),
//     });

//     render(<UserProfileForm />);

//     fireEvent.click(screen.getByText("Save"));

//     await waitFor(() => {
//       const successMessage = screen.getByTestId("success-message");
//       expect(successMessage).toBeInTheDocument();
//     });
//   });
// });
