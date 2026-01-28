'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { kboTeams } from '@/data/teams';
import { teamRankings, RANKING_YEARS } from '@/data/rankings';

// 차트 데이터를 연도 기반으로 변환
const chartData = RANKING_YEARS.map((year, idx) => {
  const entry: Record<string, number> = { year };
  kboTeams.forEach((team) => {
    entry[team.id] = teamRankings[team.id][idx];
  });
  return entry;
});

export default function RankingChart() {
  return (
    <div className="space-y-4">
      {/* 차트 */}
      <div className="w-full" style={{ height: 360 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="year"
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickLine={false}
            />
            <YAxis
              reversed
              domain={[1, 10]}
              ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickLine={false}
              width={30}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                fontSize: 13,
              }}
              formatter={(value, name) => {
                const team = kboTeams.find((t) => t.id === name);
                return [`${value}위`, team?.name ?? name];
              }}
              labelFormatter={(label) => `${label}년`}
            />
            {kboTeams.map((team) => (
              <Line
                key={team.id}
                type="monotone"
                dataKey={team.id}
                stroke={team.color}
                strokeWidth={2}
                dot={{ r: 3, fill: team.color }}
                activeDot={{ r: 5 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 범례 */}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
        {kboTeams.map((team) => (
          <div key={team.id} className="flex items-center gap-1.5 text-xs">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: team.color }}
            />
            <span className="text-gray-700">{team.logo} {team.name.split(' ')[0]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
