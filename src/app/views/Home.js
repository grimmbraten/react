import { Badge, Button, Card, Grid, Group, Image, Text } from '@mantine/core';
import React from 'react';

const Home = () => (
  <Grid>
    <Grid.Col span={4}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src="https://reactjs.org/logo-og.png" height={220} alt="Norway" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
          <Text weight={500}>React</Text>
          <Badge color="blue" variant="light">
            Core
          </Badge>
        </Group>

        <Text size="sm">A JavaScript library for building user interfaces</Text>

        <Button
          fullWidth
          color="blue"
          component="a"
          variant="light"
          style={{ marginTop: 14 }}
          href="https://reactjs.org/"
        >
          Read docs
        </Button>
      </Card>
    </Grid.Col>
    <Grid.Col span={4}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image
            src="https://external-preview.redd.it/S3jXaDIYR3kVbHqp_i5FJE2eE6PMgZWSZ4XyiPegTTI.jpg?auto=webp&s=61089211f4ba4a22a3e096bfd7854948e30eab75"
            height={220}
            alt="Norway"
          />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
          <Text weight={500}>Mantine.dev</Text>
          <Badge color="blue" variant="light">
            UI
          </Badge>
        </Group>

        <Text size="sm">A fully featured React components library</Text>

        <Button
          fullWidth
          color="blue"
          component="a"
          variant="light"
          style={{ marginTop: 14 }}
          href="https://mantine.dev/"
        >
          Read docs
        </Button>
      </Card>
    </Grid.Col>

    <Grid.Col span={4}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image
            height={220}
            src="https://logowik.com/content/uploads/images/apollo-graphql7617.jpg"
          />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
          <Text weight={500}>Apollo client</Text>
          <Badge color="blue" variant="light">
            Data
          </Badge>
        </Group>

        <Text size="sm">A comprehensive state management library</Text>

        <Button
          fullWidth
          color="blue"
          component="a"
          variant="light"
          style={{ marginTop: 14 }}
          href="https://www.apollographql.com/docs/react/"
        >
          Read docs
        </Button>
      </Card>
    </Grid.Col>
  </Grid>
);

export default Home;
