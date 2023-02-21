import { GatsbySeo } from 'gatsby-plugin-next-seo'
import React from 'react'
import Layout from '../components/Layout'
import GridContent from '../components/UI/grid-content'

const Home = () => (
  <Layout>
    <GatsbySeo title="Home Page" />
    <GridContent layout=" --center-4" mode="dark-mode" background="grey">
      <h4>Introduction</h4>
      <p>
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
        gravida velit. Donec scelerisque imperdiet fringilla. Aliquam sagittis
        vel sapien vitae mattis. Vestibulum sodales dolor neque, quis feugiat
        odio volutpat sit amet. Quisque tristique tristique nibh. Integer
        euismod iaculis turpis, sed finibus nisl mattis eu. Phasellus mattis
        luctus purus et ultrices. Donec in nisl nec turpis accumsan sagittis nec
        id justo. Morbi ultrices, elit sit amet posuere maximus, nisl sem
        laoreet nibh, non gravida nunc velit nec erat. Fusce nunc odio, lobortis
        ac elit ac, gravida dignissim nunc. Nunc accumsan vehicula felis, eu
        auctor risus ultricies vel. Nulla vulputate condimentum viverra.
        <br />
        <br />
        Maecenas ut massa urna. Maecenas eget odio in mauris luctus sollicitudin
        ut eget mauris. Curabitur semper quis lectus sed egestas. Quisque quis
        velit aliquet, accumsan metus ut, congue felis. Mauris vitae urna id
        magna tempus laoreet. Integer sit amet condimentum orci, quis hendrerit
        enim. In eu metus erat. Morbi eleifend viverra purus sit amet interdum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        accumsan porttitor nibh, ut interdum augue suscipit nec. Aenean ac orci
        id quam elementum pellentesque. Cras volutpat tristique ante, a
        imperdiet nisl feugiat id. Curabitur sagittis lectus augue, vel
        dignissim lacus molestie vel. Aenean gravida hendrerit lacus vitae
        porttitor. Nullam varius lorem sapien. Donec sed tortor turpis.
      </p>
    </GridContent>
    <GridContent layout=" --center-4" mode="light-mode" background="image">
      <h4>Startegy</h4>
      <p>
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
        gravida velit. Donec scelerisque imperdiet fringilla. Aliquam sagittis
        vel sapien vitae mattis. Vestibulum sodales dolor neque, quis feugiat
        odio volutpat sit amet. Quisque tristique tristique nibh. Integer
        euismod iaculis turpis, sed finibus nisl mattis eu. Phasellus mattis
        luctus purus et ultrices. Donec in nisl nec turpis accumsan sagittis nec
        id justo. Morbi ultrices, elit sit amet posuere maximus, nisl sem
        laoreet nibh, non gravida nunc velit nec erat. Fusce nunc odio, lobortis
        ac elit ac, gravida dignissim nunc. Nunc accumsan vehicula felis, eu
        auctor risus ultricies vel. Nulla vulputate condimentum viverra.
        <br />
        <br />
        Maecenas ut massa urna. Maecenas eget odio in mauris luctus sollicitudin
        ut eget mauris. Curabitur semper quis lectus sed egestas. Quisque quis
        velit aliquet, accumsan metus ut, congue felis. Mauris vitae urna id
        magna tempus laoreet. Integer sit amet condimentum orci, quis hendrerit
        enim. In eu metus erat. Morbi eleifend viverra purus sit amet interdum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        accumsan porttitor nibh, ut interdum augue suscipit nec. Aenean ac orci
        id quam elementum pellentesque. Cras volutpat tristique ante, a
        imperdiet nisl feugiat id. Curabitur sagittis lectus augue, vel
        dignissim lacus molestie vel. Aenean gravida hendrerit lacus vitae
        porttitor. Nullam varius lorem sapien. Donec sed tortor turpis.
      </p>
    </GridContent>
  </Layout>
)

export default Home
