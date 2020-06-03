import React from "react";
import Layout from "../../components/layout";
import School from "../../components/school";

export default () => {
  return (
    <Layout>
      <h2>Curriculum of Top Universities in Computer Science</h2>
      <h3 className="section-header">Universities</h3>
      <School url="/curriculum/stanford/" name="Stanford University" />
      <School url="/mit/" name="Massachusetts Institute of Technology" />
      <School url="/cmu/" name="Carnegie Mellon University" />
      <School url="/ucb/" name="University of California, Berkeley" />
      <p>
        Here I just list the top 4 cs universities. Might include more in the
        future.
      </p>
      <h3 className="section-header">Courses</h3>
    </Layout>
  );
};
