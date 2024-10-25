import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Container, Card, CardContent } from '@mui/material';

function App() {
  const tasks = [
    { id: 1, title: 'Design new landing page', status: 'In Progress', priority: 'High' },
    { id: 2, title: 'Update user documentation', status: 'Pending', priority: 'Medium' },
    { id: 3, title: 'Fix navigation bugs', status: 'Completed', priority: 'High' },
  ];

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dante's TaskMaster
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          My Tasks
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Track and manage your daily tasks
        </Typography>

        <Box sx={{ mt: 4 }}>
          {tasks.map((task) => (
            <Card key={task.id} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6">{task.title}</Typography>
                <Typography color="textSecondary">
                  Status: {task.status} • Priority: {task.priority}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default App;