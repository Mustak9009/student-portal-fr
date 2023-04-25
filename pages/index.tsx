import { dataTunnel } from "@/lib/dataTunel";
import { gql } from "graphql-request";
import { GetServerSideProps } from "next/types";


export default function Home({data}:any) {
  return (
   <h1>Hi {data.tests.data[0].attributes.name}</h1>
  )
}
const query = gql`
query{
  tests{
    data{
      attributes{
        name
      }
    }
  }
}
`;

export const getServerSideProps: GetServerSideProps = async ({req}:{req:any}) => {
  const data = await dataTunnel(query);
  console.log(data)
  return {
    props: {
      data
    },
  };
};
