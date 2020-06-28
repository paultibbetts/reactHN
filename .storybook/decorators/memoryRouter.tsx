import React from 'react';
import { MemoryRouter } from "react-router-dom";

export const withMemoryRouter = (story: any) => (
    <MemoryRouter>{story()}</MemoryRouter>
);