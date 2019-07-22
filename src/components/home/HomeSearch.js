import React from "react";
import Search from "../search/Search";

import { Spinner } from "reactstrap";

import { Translation } from "react-i18next";

import HOME_SEARCH from "../../gql/HOME_SEARCH";

import {Query} from "react-apollo";

class HomeSearch extends React.Component {

  constructor(props) {
    super(props);

    this.createSearchIndex = this.createSearchIndex.bind(this);
  }

  createSearchIndex(data) {
    let index = [];

    if (data.projects) {
      data.projects.map((project) => {
        index.push({
          en: project.name, 
          fr: project.name,
          out: project.id
        });
      });

      return index;
    } else {
      return index;
    }
    
  }

  render() {
    return(

      <Query query={HOME_SEARCH} variables={{id: this.props.id}}>
        {
            ({ loading, error, data }) => {
                if (loading) return (<Spinner color="primary" />);
                if (error) { console.log(error); return; }

                if (data) {
                    return (
                      <Translation ns={["translation"]}>
                        {
                          (t, { i18n }) => (
                            <Search
                              placeholder={t("search-placeholder")}
                              lang={i18n.language}
                              data={this.createSearchIndex(data)}
                              englishKey="en"
                              frenchKey="fr"
                              outputKey="out"
                            />
                          )
                        }
                      </Translation>
                    )
                }
            }
        }
      </Query>
    );
  }
}

export default HomeSearch;