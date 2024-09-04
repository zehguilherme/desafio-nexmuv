export interface PartnersProps {
  createdAt: string;
  name: string;
  description: string;
  repositoryGit: string;
  urlDoc: string;
  clients: [
    string,
    string,
    number,
    string,
    string,
    string,
    string,
    string,
    number,
    number
  ];
  projects: [
    number,
    string,
    string,
    string,
    string,
    string,
    number,
    number,
    string,
    string
  ];
  id: string;
}
