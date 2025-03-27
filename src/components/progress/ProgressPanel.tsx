
import React, { useState } from 'react';
import { 
  BarChart3, 
  CalendarDays, 
  CheckCircle, 
  Clock, 
  Plus, 
  Trash2, 
  ChevronRight,
  Leaf,
  Calendar,
  Edit
} from 'lucide-react';

const ProgressPanel = () => {
  const [activeView, setActiveView] = useState<'weekly' | 'tasks'>('weekly');
  const [showAddTask, setShowAddTask] = useState(false);
  
  // Mock week data
  const currentWeek = {
    number: 32,
    start: 'Aug 7, 2023',
    end: 'Aug 13, 2023'
  };
  
  // Mock task data
  const weeklyTasks = [
    {
      id: 1,
      title: 'Fertilize rice field',
      description: 'Apply NPK fertilizer to the rice paddies',
      dueDate: 'Tuesday, Aug 8',
      priority: 'high',
      status: 'completed',
      crop: 'Rice'
    },
    {
      id: 2,
      title: 'Irrigation check',
      description: 'Verify all irrigation systems are functioning properly',
      dueDate: 'Wednesday, Aug 9',
      priority: 'medium',
      status: 'completed',
      crop: 'All crops'
    },
    {
      id: 3,
      title: 'Pesticide application',
      description: 'Apply organic pesticides to wheat field',
      dueDate: 'Thursday, Aug 10',
      priority: 'high',
      status: 'pending',
      crop: 'Wheat'
    },
    {
      id: 4,
      title: 'Soil pH testing',
      description: 'Test soil pH levels in soybean fields',
      dueDate: 'Friday, Aug 11',
      priority: 'medium',
      status: 'pending',
      crop: 'Soybeans'
    },
    {
      id: 5,
      title: 'Equipment maintenance',
      description: 'Clean and maintain irrigation pumps',
      dueDate: 'Saturday, Aug 12',
      priority: 'low',
      status: 'pending',
      crop: 'All crops'
    }
  ];
  
  // Weekly progress data
  const weeklyProgress = {
    totalTasks: 5,
    completedTasks: 2,
    progress: 40,
    crops: [
      { name: 'Rice', progress: 65, totalTasks: 2, completedTasks: 1 },
      { name: 'Wheat', progress: 30, totalTasks: 1, completedTasks: 0 },
      { name: 'Soybeans', progress: 25, totalTasks: 1, completedTasks: 0 },
      { name: 'General', progress: 50, totalTasks: 1, completedTasks: 1 }
    ]
  };

  // Task form data
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium',
    crop: ''
  });

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAddTask(false);
    // In a real app, this would add the task to the list
  };

  const toggleTaskStatus = (taskId: number) => {
    // In a real app, this would toggle the task status
    console.log('Toggling task status for ID:', taskId);
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Progress Tracker</h1>
        <p className="text-muted-foreground mt-2">
          Monitor your farming tasks and track progress for better productivity.
        </p>
      </div>

      {/* View toggle */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex border-b border-border">
          <button
            className={`px-4 py-2 text-sm font-medium transition-colors relative ${
              activeView === 'weekly' 
                ? 'text-primary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setActiveView('weekly')}
          >
            Weekly Progress
            {activeView === 'weekly' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            )}
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium transition-colors relative ${
              activeView === 'tasks' 
                ? 'text-primary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setActiveView('tasks')}
          >
            Task List
            {activeView === 'tasks' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            )}
          </button>
        </div>
        
        <button 
          onClick={() => setShowAddTask(true)}
          className="flex items-center px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Task
        </button>
      </div>

      {activeView === 'weekly' && (
        <div className="space-y-6">
          {/* Weekly overview */}
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-medium">Week {currentWeek.number}</h3>
                <p className="text-sm text-muted-foreground mt-1">{currentWeek.start} - {currentWeek.end}</p>
              </div>
              <CalendarDays className="text-primary" size={24} />
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm font-medium">{weeklyProgress.progress}%</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary"
                  style={{ width: `${weeklyProgress.progress}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-muted-foreground">
                  {weeklyProgress.completedTasks} of {weeklyProgress.totalTasks} tasks completed
                </span>
                <span className="text-xs text-muted-foreground">
                  {5 - new Date().getDay()} days remaining
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Crop-specific Progress</h4>
              
              {weeklyProgress.crops.map((crop, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Leaf className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">{crop.name}</span>
                    </div>
                    <span className="text-sm">{crop.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary"
                      style={{ width: `${crop.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-end">
                    <span className="text-xs text-muted-foreground">
                      {crop.completedTasks}/{crop.totalTasks} tasks
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly tasks */}
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium">This Week's Tasks</h3>
              <CheckCircle className="text-primary" size={24} />
            </div>
            
            <div className="space-y-4">
              {weeklyTasks.map((task) => (
                <div 
                  key={task.id} 
                  className={`p-4 rounded-lg ${
                    task.status === 'completed' 
                      ? 'bg-green-50 border border-green-200' 
                      : task.priority === 'high'
                        ? 'bg-amber-50 border border-amber-200'
                        : 'bg-secondary border border-border'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start">
                      <button 
                        onClick={() => toggleTaskStatus(task.id)}
                        className={`mt-0.5 h-5 w-5 rounded-full flex items-center justify-center ${
                          task.status === 'completed' 
                            ? 'bg-green-500 text-white' 
                            : 'border border-muted-foreground'
                        }`}
                      >
                        {task.status === 'completed' && <CheckCircle className="h-4 w-4" />}
                      </button>
                      
                      <div className="ml-3">
                        <h4 className={`font-medium ${task.status === 'completed' ? 'line-through text-muted-foreground' : ''}`}>
                          {task.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                        <div className="flex items-center mt-2">
                          <div className="flex items-center">
                            <Clock className="h-3.5 w-3.5 text-muted-foreground mr-1" />
                            <span className="text-xs">{task.dueDate}</span>
                          </div>
                          <div className="flex items-center ml-4">
                            <Leaf className="h-3.5 w-3.5 text-primary mr-1" />
                            <span className="text-xs">{task.crop}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-md hover:bg-secondary transition-colors">
                        <Edit className="h-4 w-4 text-muted-foreground" />
                      </button>
                      <button className="p-1 rounded-md hover:bg-destructive/10 transition-colors">
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeView === 'tasks' && (
        <div className="space-y-6">
          {/* Task categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Pending</h3>
                <span className="text-sm px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                  {weeklyTasks.filter(t => t.status === 'pending').length}
                </span>
              </div>
              
              <div className="space-y-3">
                {weeklyTasks
                  .filter(t => t.status === 'pending')
                  .map(task => (
                    <div key={task.id} className="p-3 rounded-lg bg-secondary/50">
                      <h4 className="font-medium">{task.title}</h4>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center">
                          <Clock className="h-3.5 w-3.5 text-muted-foreground mr-1" />
                          <span className="text-xs">{task.dueDate}</span>
                        </div>
                        <button className="text-xs text-primary hover:underline">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            
            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">In Progress</h3>
                <span className="text-sm px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                  {weeklyTasks.filter(t => t.status === 'in-progress').length}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="p-6 text-center">
                  <p className="text-sm text-muted-foreground">No tasks in progress</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Completed</h3>
                <span className="text-sm px-2 py-0.5 rounded-full bg-green-100 text-green-800">
                  {weeklyTasks.filter(t => t.status === 'completed').length}
                </span>
              </div>
              
              <div className="space-y-3">
                {weeklyTasks
                  .filter(t => t.status === 'completed')
                  .map(task => (
                    <div key={task.id} className="p-3 rounded-lg bg-secondary/50">
                      <h4 className="font-medium line-through">{task.title}</h4>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center">
                          <Clock className="h-3.5 w-3.5 text-muted-foreground mr-1" />
                          <span className="text-xs">{task.dueDate}</span>
                        </div>
                        <button className="text-xs text-primary hover:underline">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          
          {/* Task calendar */}
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium">Task Calendar</h3>
              <Calendar className="text-primary" size={24} />
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center text-sm font-medium py-2">{day}</div>
              ))}
              {Array.from({ length: 35 }).map((_, i) => {
                const day = i - 1; // Adjust starting day
                return (
                  <div 
                    key={i}
                    className={`aspect-square rounded-lg border p-1 ${
                      day === new Date().getDate() - 1
                        ? 'bg-primary/10 border-primary'
                        : 'border-border hover:bg-secondary/50 transition-colors'
                    }`}
                  >
                    <div className="h-full flex flex-col">
                      <span className="text-xs">{day > 0 && day}</span>
                      {day === 8 && <div className="mt-1 h-1 w-full bg-green-500 rounded-full"></div>}
                      {day === 10 && <div className="mt-1 h-1 w-full bg-amber-500 rounded-full"></div>}
                      {day === 11 && (
                        <>
                          <div className="mt-1 h-1 w-full bg-blue-500 rounded-full"></div>
                          <div className="mt-0.5 h-1 w-full bg-primary rounded-full"></div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="flex items-center justify-center space-x-4 mt-4">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-xs">Completed</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                <span className="text-xs">High Priority</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-xs">Regular</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span className="text-xs">Multiple Tasks</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add task dialog */}
      {showAddTask && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="w-full max-w-lg p-6 rounded-lg bg-card shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium">Add New Task</h3>
              <button 
                onClick={() => setShowAddTask(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleAddTask}>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium block mb-1">Task Title</label>
                  <input 
                    type="text"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter task title"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium block mb-1">Description</label>
                  <textarea 
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter task description"
                    rows={3}
                    required
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium block mb-1">Due Date</label>
                    <input 
                      type="date"
                      value={newTask.dueDate}
                      onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                      className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium block mb-1">Priority</label>
                    <select 
                      value={newTask.priority}
                      onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                      className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium block mb-1">Related Crop</label>
                  <select 
                    value={newTask.crop}
                    onChange={(e) => setNewTask({ ...newTask, crop: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  >
                    <option value="">Select crop</option>
                    <option value="rice">Rice</option>
                    <option value="wheat">Wheat</option>
                    <option value="soybeans">Soybeans</option>
                    <option value="all">All crops</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowAddTask(false)}
                  className="px-4 py-2 rounded-md border text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressPanel;
