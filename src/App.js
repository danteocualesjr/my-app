import React from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Card, 
  CardContent,
  Fab,
  Chip
} from '@mui/material';
import {
  Add as AddIcon,
  Assignment as AssignmentIcon,
  FiberManualRecord as FiberManualRecordIcon
} from '@mui/icons-material';

function App() {
  const tasks = [
    { id: 1, title: 'Design new landing page', status: 'In Progress', priority: 'High' },
    { id: 2, title: 'Update user documentation', status: 'Pending', priority: 'Medium' },
    { id: 3, title: 'Fix navigation bugs', status: 'Completed', priority: 'High' },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'error';
      case 'Medium': return 'warning';
      default: return 'success';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'success';
      case 'In Progress': return 'primary';
      default: return 'default';
    }
  };

  return (
    <Box>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <AssignmentIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dante's TaskMaster
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Box>
            <Typography variant="h4" gutterBottom>
              My Tasks
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Track and manage your daily tasks
            </Typography>
          </Box>
          <Button 
            variant="contained" 
            startIcon={<AddIcon />}
            sx={{ height: 40 }}
          >
            Add New Task
          </Button>
        </Box>

        <Box sx={{ mt: 4 }}>
          {tasks.map((task) => (
            <Card 
              key={task.id} 
              sx={{ 
                mb: 2,
                '&:hover': {
                  boxShadow: 6,
                  transition: 'box-shadow 0.3s ease-in-out'
                }
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {task.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Chip 
                        icon={<FiberManualRecordIcon sx={{ fontSize: '0.8rem !important' }} />}
                        label={task.status}
                        size="small"
                        color={getStatusColor(task.status)}
                        variant="outlined"
                      />
                      <Chip 
                        label={task.priority}
                        size="small"
                        color={getPriorityColor(task.priority)}
                        variant="outlined"
                      />
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      <Fab 
        color="primary" 
        aria-label="add"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}

export default App;