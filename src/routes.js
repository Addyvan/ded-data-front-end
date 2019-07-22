// Layouts
import DefaultLayout from "./layouts/Default";
import MappingDigitalGovLayout from "./layouts/MappingDigitalGovLayout";

// Reporting Views
import ReportingOverview from "./containers/reporting/Overview";

// Mapping Digital Gov Views
import MappingHome from "./containers/mapping/Home";
import AddProject from "./containers/mapping/AddProject";
import Project from "./containers/mapping/Project";
import Tag from "./containers/mapping/Tag";
import Person from "./containers/mapping/Person";
import Explore from "./containers/mapping/Explore";

export default [
  {
    path: "/",
    layout: DefaultLayout,
    exact: true,
    component: ReportingOverview
  },
  {
    path: "/mapping-digital-gov/",
    layout: MappingDigitalGovLayout,
    exact: true,
    component: MappingHome
  },
  {
    path: "/mapping-digital-gov/explore",
    layout: MappingDigitalGovLayout,
    component: Explore
  },
  {
    path: "/mapping-digital-gov/add-project",
    layout: MappingDigitalGovLayout,
    component: AddProject
  },
  {
    path: "/mapping-digital-gov/projects/:id",
    layout: MappingDigitalGovLayout,
    component: Project
  },
  {
    path: "/mapping-digital-gov/tags/:id",
    layout: MappingDigitalGovLayout,
    component: Tag
  },
  {
    path: "/mapping-digital-dov/people/:id",
    layout: MappingDigitalGovLayout,
    component: Person
  },
];