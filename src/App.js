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
  Chip,
  Avatar,
  IconButton,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Paper,
  Divider
} from '@mui/material';
import {
  Add as AddIcon,
  Assignment as AssignmentIcon,
  FiberManualRecord as FiberManualRecordIcon,
  MoreVert as MoreVertIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  DateRange as DateRangeIcon,
  Person as PersonIcon
} from '@mui/icons-material';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb', // Modern blue
    },
    background: {
      default: '#f8fafc',
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    }
  },
  shape: {
    borderRadius: 12
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid #e2e8f0',
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        }
      }
    }
  }
});

function App() {
  // Sample tasks data
  const tasks = [
    { id: 1, title: 'Design new landing page', status: 'In Progress', priority: 'High', dueDate: 'Oct 28', assignee: 'John Doe' },
    { id: 2, title: 'Update user documentation', status: 'Pending', priority: 'Medium', dueDate: 'Oct 30', assignee: 'Jane Smith' },
    { id: 3, title: 'Fix navigation bugs', status: 'Completed', priority: 'High', dueDate: 'Oct 27', assignee: 'Mike Johnson' },
  ];

  // Function to determine priority color
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'error';
      case 'Medium': return 'warning';
      default: return 'success';
    }
  };

  // Function to determine status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'success';
      case 'In Progress': return 'primary';
      default: return 'default';
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        {/* App Bar */}
        <AppBar position="static" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #e2e8f0' }}>
          <Toolbar>
            {/* Logo and App Title */}
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <AssignmentIcon sx={{ color: 'primary.main', mr: 2 }} />
              <Typography variant="h6" component="div" sx={{ color: 'text.primary' }}>
                Dante's TaskMaster
              </Typography>
            </Box>
            
            {/* App Bar Icons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <IconButton>
                <NotificationsIcon />
              </IconButton>
              <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
                <PersonIcon fontSize="small" />
              </Avatar>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
            <Box>
              <Typography variant="h4" sx={{ color: 'text.primary', mb: 1 }}>
                My Tasks
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Track and manage your daily tasks
              </Typography>
            </Box>
            {/* Add New Task Button */}
            <Button 
              variant="contained" 
              startIcon={<AddIcon />}
              sx={{ 
                px: 3, 
                py: 1.2,
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: 'none',
                }
              }}
            >
              Add New Task
            </Button>
          </Box>

          {/* Task List */}
          <Box sx={{ mt: 4 }}>
            {tasks.map((task) => (
              <Card 
                key={task.id} 
                sx={{ 
                  mb: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box sx={{ flex: 1 }}>
                      {/* Task Title */}
                      <Typography variant="h6" sx={{ mb: 2 }}>
                        {task.title}
                      </Typography>
                      {/* Task Details */}
                      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                        {/* Status Chip */}
                        <Chip 
                          icon={<FiberManualRecordIcon sx={{ fontSize: '0.8rem !important' }} />}
                          label={task.status}
                          size="small"
                          color={getStatusColor(task.status)}
                          sx={{ fontWeight: 500 }}
                        />
                        {/* Priority Chip */}
                        <Chip 
                          label={task.priority}
                          size="small"
                          color={getPriorityColor(task.priority)}
                          sx={{ fontWeight: 500 }}
                        />
                        {/* Due Date */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                          <DateRangeIcon sx={{ fontSize: 18 }} />
                          <Typography variant="body2">
                            {task.dueDate}
                          </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        {/* Assignee */}
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {task.assignee}
                        </Typography>
                      </Box>
                    </Box>
                    {/* More Options Button */}
                    <IconButton size="small">
                      <MoreVertIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>

        {/* Floating Action Button */}
        <Fab 
          color="primary" 
          aria-label="add"
          sx={{ 
            position: 'fixed', 
            bottom: 24, 
            right: 24,
            boxShadow: '0 4px 12px rgba(37,99,235,0.3)',
          }}
        >
          <AddIcon />
        </Fab>
      </Box>
    </ThemeProvider>
  );
}

export default App;