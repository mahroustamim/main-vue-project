<script setup>
const activities = [
  {
    id: 1,
    user: {
      name: 'John Smith',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    action: 'completed',
    target: 'Quarterly Report',
    date: '2h ago',
  },
  {
    id: 2,
    user: {
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    action: 'uploaded',
    target: 'Marketing Materials',
    date: '4h ago',
  },
  {
    id: 3,
    user: {
      name: 'Michael Brown',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    action: 'commented',
    target: 'Project Proposal',
    date: '1d ago',
  },
  {
    id: 4,
    user: {
      name: 'Emily Wilson',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    action: 'shared',
    target: 'Team Document',
    date: '2d ago',
  },
]
</script>

<template>
  <div class="rounded-lg bg-white p-6 shadow">
    <h2 class="text-lg font-medium leading-6 text-gray-900">Recent Activity</h2>
    <div class="mt-6 flow-root">
      <ul role="list" class="-mb-8">
        <li v-for="(activity, activityIdx) in activities" :key="activity.id">
          <div class="relative pb-8">
            <span v-if="activityIdx !== activities.length - 1" class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" />
            <div class="relative flex space-x-3">
              <div>
                <img :src="activity.user.image" :alt="activity.user.name" class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white" />
              </div>
              <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                <div>
                  <p class="text-sm text-gray-800">
                    <span class="font-medium text-gray-900">{{ activity.user.name }}</span>
                    {{ activity.action }} {{ activity.target }}
                  </p>
                </div>
                <div class="whitespace-nowrap text-right text-sm text-gray-500">
                  <time :datetime="activity.date">{{ activity.date }}</time>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="mt-6">
      <a href="#" class="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
        View all
      </a>
    </div>
  </div>
</template>