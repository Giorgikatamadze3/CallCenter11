
import { Phase, TaskStatus, TaskType } from './types';

export const PROJECT_PHASES: Phase[] = [
  {
    id: 1,
    title: 'Phase 1: Planning & Strategy',
    description: 'Define the purpose, scope, and financial plan for the call center. Goals include: defining purpose, choosing a service model, and deciding on a work model.',
    tasks: [
      { id: 'p1-t1', title: 'Define KPIs (e.g., Average Handling Time, First Call Resolution)', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p1-t2', title: 'Estimate budget (equipment, software, wages, rent, etc.)', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p1-t3', title: 'Set timeline and milestones', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p1-t4', title: 'Perform competitor/market analysis', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p1-d1', title: 'Business plan', type: TaskType.Deliverable, status: TaskStatus.ToDo },
      { id: 'p1-d2', title: 'SWOT analysis', type: TaskType.Deliverable, status: TaskStatus.ToDo },
      { id: 'p1-d3', title: 'Budget breakdown', type: TaskType.Deliverable, status: TaskStatus.ToDo },
      { id: 'p1-d4', title: 'Risk management plan', type: TaskType.Deliverable, status: TaskStatus.ToDo },
    ],
  },
  {
    id: 2,
    title: 'Phase 2: Legal & Compliance',
    description: 'Establish the legal framework and ensure compliance with all relevant regulations.',
    tasks: [
      { id: 'p2-t1', title: 'Register business entity', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p2-t2', title: 'Obtain necessary licenses (telecommunications, data privacy, etc.)', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p2-t3', title: 'Set up tax and payroll compliance', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p2-t4', title: 'Ensure GDPR / HIPAA / TCPA compliance', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p2-d1', title: 'Business registration documents', type: TaskType.Deliverable, status: TaskStatus.ToDo },
      { id: 'p2-d2', title: 'Contracts & NDA templates', type: TaskType.Deliverable, status: TaskStatus.ToDo },
      { id: 'p2-d3', title: 'Privacy policy', type: TaskType.Deliverable, status: TaskStatus.ToDo },
      { id: 'p2-d4', title: 'Legal risk assessment report', type: TaskType.Deliverable, status: TaskStatus.ToDo },
    ],
  },
  {
    id: 3,
    title: 'Phase 3: Infrastructure & Technology Setup',
    description: 'Set up the physical and technological backbone of the call center.',
    tasks: [
      { id: 'p3-t1', title: 'Choose and set up office location (if not remote)', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p3-t2', title: 'Procure hardware: Headsets, Laptops/Desktops, VoIP phones', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p3-t3', title: 'Select and implement software stack (VoIP/PBX, CRM, etc.)', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p3-t4', title: 'Configure IT Infrastructure: Call routing, IVR, failover, security', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p3-d1', title: 'Fully functional IT and telecom setup', type: TaskType.Deliverable, status: TaskStatus.ToDo },
      { id: 'p3-d2', title: 'IVR flow chart', type: TaskType.Deliverable, status: TaskStatus.ToDo },
      { id: 'p3-d3', title: 'SLA with software vendors', type: TaskType.Deliverable, status: TaskStatus.ToDo },
    ],
  },
  {
    id: 4,
    title: 'Phase 4: Recruitment & Training',
    description: 'Hire and train the staff who will operate the call center.',
    tasks: [
      { id: 'p4-t1', title: 'Define roles and write job descriptions (Agents, Team Leads, etc.)', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p4-t2', title: 'Establish interview & onboarding process', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p4-t3', title: 'Develop training modules: product, call handling, software', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p4-t4', title: 'Develop training on security and data privacy', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p4-d1', title: 'Employee handbook', type: TaskType.Deliverable, status: TaskStatus.ToDo },
      { id: 'p4-d2', title: 'Training material and curriculum', type: TaskType.Deliverable, status: TaskStatus.ToDo },
      { id: 'p4-d3', title: 'Call scripts', type: TaskType.Deliverable, status: TaskStatus.ToDo },
      { id: 'p4-d4', title: 'Quality assurance checklists', type: TaskType.Deliverable, status: TaskStatus.ToDo },
    ],
  },
  {
    id: 5,
    title: 'Phase 5: Operations & Process Design',
    description: 'Define the standard operating procedures and workflows for daily operations.',
    tasks: [
      { id: 'p5-t1', title: 'Build SOPs (Standard Operating Procedures)', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p5-t2', title: 'Define escalation matrix for issues', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p5-t3', title: 'Finalize QA process and forms', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p5-t4', title: 'Create scheduling and shift planning process', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p5-d1', title: 'Operational SOP manual', type: TaskType.Deliverable, status: TaskStatus.ToDo },
      { id: 'p5-d2', title: 'QA evaluation form', type: TaskType.Deliverable, status: TaskStatus.ToDo },
      { id: 'p5-d3', title: 'Escalation flowcharts', type: TaskType.Deliverable, status: TaskStatus.ToDo },
    ],
  },
  {
    id: 6,
    title: 'Phase 6: Go-Live & Optimization',
    description: 'Launch the call center and begin the process of continuous improvement.',
    tasks: [
      { id: 'p6-t1', title: 'Complete Pre-Go Live Checklist: test calls, stress test systems', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p6-t2', title: 'Launch: Open call center for live customers', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p6-t3', title: 'Conduct daily debriefs for first 2 weeks', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p6-t4', title: 'Implement system to collect customer & agent feedback', type: TaskType.KeyTask, status: TaskStatus.ToDo },
      { id: 'p6-d1', title: 'Daily performance reports', type: TaskType.Deliverable, status: TaskStatus.ToDo },
      { id: 'p6-d2', title: 'Live performance dashboard', type: TaskType.Deliverable, status: TaskStatus.ToDo },
      { id: 'p6-d3', title: 'Optimization roadmap for next quarter', type: TaskType.Deliverable, status: TaskStatus.ToDo },
    ],
  },
];
