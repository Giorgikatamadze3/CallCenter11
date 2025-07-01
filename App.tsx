
import React, { useState, useMemo, useCallback } from 'react';
import { Phase, TaskStatus } from './types';
import { PROJECT_PHASES } from './constants';
import PhaseCard from './components/PhaseCard';
import ProgressBar from './components/ProgressBar';

const App = () => {
  const [phases, setPhases] = useState<Phase[]>(PROJECT_PHASES);

  const handleTaskStatusChange = useCallback((phaseId: number, taskId: string, newStatus: TaskStatus) => {
    setPhases(currentPhases =>
      currentPhases.map(phase => {
        if (phase.id === phaseId) {
          return {
            ...phase,
            tasks: phase.tasks.map(task =>
              task.id === taskId ? { ...task, status: newStatus } : task
            ),
          };
        }
        return phase;
      })
    );
  }, []);

  const overallProgress = useMemo(() => {
    const allTasks = phases.flatMap(p => p.tasks);
    if (allTasks.length === 0) return 0;
    const doneTasks = allTasks.filter(t => t.status === TaskStatus.Done).length;
    return (doneTasks / allTasks.length) * 100;
  }, [phases]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            Call Center Launchpad
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Your comprehensive guide to planning, building, and launching a successful call center.
          </p>
        </header>
        
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">Overall Project Progress</h2>
                <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">{Math.round(overallProgress)}%</span>
            </div>
            <ProgressBar progress={overallProgress} />
        </div>

        <main>
          {phases.map((phase, index) => (
            <PhaseCard
              key={phase.id}
              phase={phase}
              onTaskStatusChange={handleTaskStatusChange}
              isInitiallyOpen={index === 0}
            />
          ))}
        </main>
        
        <footer className="text-center mt-12 text-sm text-slate-500 dark:text-slate-400">
            <p>Call Center Launchpad &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
