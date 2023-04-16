import client from "./apollo-client";
import { gql } from "@apollo/client";

export function HeroSecData() {
  return client.query({
    query: gql`
      query HeroDetail {
        heroDetail {
          data {
            attributes {
              HeroDetail {
                title
                id
                desc
              }
            }
          }
        }
      }
    `,
  });
}

export function WorkSecData() {
  return client.query({
    query: gql`
      query WorkDetail {
        workDetail {
          data {
            attributes {
              WorkDetail {
                title
                id
                desc
              }
            }
          }
        }
      }
    `,
  });
}

export function TeamSecData() {
  return client.query({
    query: gql`
      query TeamDetail {
        teamDetail {
          data {
            attributes {
              TeamDetail {
                title
                id
                desc
                desc2
              }
            }
          }
        }
      }
    `,
  });
}

export function HireSecData() {
  return client.query({
    query: gql`
      query {
        hireCards {
          data {
            attributes {
              title
              HireCard {
                id
                text
                num
                color
                bgColor
              }
            }
          }
        }
      }
    `,
  });
}

export function BenefitSecData() {
  return client.query({
    query: gql`
      query {
        benefitCards {
          data {
            attributes {
              title
              BenefitCard {
                id
                text
                gradient
                icon {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
}

export function FooterDataP1() {
  return client.query({
    query: gql`
      query {
        footerListP1S {
          data {
            attributes {
              title
              List {
                id
                text
                link
                linkType
              }
            }
          }
        }
      }
    `,
  });
}
