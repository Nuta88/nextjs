import Head from 'next/head';
import { Card, Input, Pagination } from 'antd';
import { planetCardUrl } from '../../constatnts/planets';
import { Space, Image, Title, Loading, EmptyData } from '../../components';
import { useFetchPlanets } from '../../hooks/useFetchPlanets';

const { Meta } = Card;

const Planets = () => {
  const {
    planets,
    count,
    status,
    onSearch,
    onChangePage
  } = useFetchPlanets();

  const handleSearch = e => onSearch(e.target.value);

  const cardDescriptions = planet => (
    <div>
      <div>Climate: {planet.climate}</div>
      <div>Number of residents: {planet.residents?.length}</div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Planets</title>
      </Head>
      <Space direction="vertical" size={[16, 16]} style={{ width: '100%' }}>
        <Title>Planets</Title>
        <Input
          size="large"
          placeholder="Search planet by name"
          onChange={handleSearch}
          allowClear
        />
        <Space style={{ justifyContent: 'space-around' }} wrap>
          {planets.length === 0 && <EmptyData />}
          {planets?.map(planet => (
            <Card
              key={planet.name}
              hoverable
              style={{ width: 240, height: 350, display: 'inline-block' }}
              cover={<Image alt="example" src={planetCardUrl} />}
            >
              <Meta title={planet.name} description={cardDescriptions(planet)} />
            </Card>
          ))}
        </Space>
        <Pagination
          total={count}
          onChange={onChangePage}
          showSizeChanger={false}
        />
      </Space>
      {status === 'loading' && <Loading />}
    </>
  );
};

export default Planets;
