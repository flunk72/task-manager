import { CountrySidePage, HomePage, OfficePage, WorkWithDocumentsPage } from 'pages';
import { Navigate, Route, Routes } from 'react-router-dom';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/office" element={<OfficePage />} />
      <Route path="/countryside" element={<CountrySidePage />} />
      <Route path="/work-with-documents" element={<WorkWithDocumentsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
