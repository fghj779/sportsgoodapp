'use client';

import { motion } from 'framer-motion';
import { TeamDepthChart } from '@/types';
import { Users, Target, Shield } from 'lucide-react';
import Card from './Card';

interface DepthChartProps {
    depthChart: TeamDepthChart;
    teamColor: string;
    teamName: string;
}

const positionLabels: Record<string, string> = {
    catcher: '포수 (C)',
    firstBase: '1루수 (1B)',
    secondBase: '2루수 (2B)',
    thirdBase: '3루수 (3B)',
    shortStop: '유격수 (SS)',
    leftField: '좌익수 (LF)',
    centerField: '중견수 (CF)',
    rightField: '우익수 (RF)',
    designatedHitter: '지명타자 (DH)',
};

export default function DepthChart({ depthChart, teamColor, teamName }: DepthChartProps) {
    return (
        <Card>
            <div className="space-y-6">
                {/* 헤더 */}
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <Users className="text-blue-500" size={28} />
                        <h2 className="text-2xl font-bold text-gray-800">2026 시즌 뎁스차트</h2>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                        <span className="font-semibold">감독:</span>
                        <span>{depthChart.manager}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2 bg-yellow-50 rounded-lg p-2 border border-yellow-200">
                        📌 {depthChart.notes}
                    </p>
                </div>

                {/* 타자 라인업 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Target className="text-pink-500" size={24} />
                        <h3 className="text-xl font-bold text-gray-800">타자 (Best 9)</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gradient-to-r from-pink-50 to-purple-50">
                                    <th className="px-3 py-2 text-left font-semibold text-gray-700 rounded-tl-lg">포지션</th>
                                    <th className="px-3 py-2 text-left font-semibold text-gray-700">주전</th>
                                    <th className="px-3 py-2 text-left font-semibold text-gray-700 rounded-tr-lg">백업/경쟁</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(depthChart.lineup).map(([key, position], idx) => (
                                    <tr
                                        key={key}
                                        className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                                    >
                                        <td className="px-3 py-2 font-medium text-gray-700 whitespace-nowrap">
                                            {positionLabels[key] || key}
                                        </td>
                                        <td className="px-3 py-2 font-semibold" style={{ color: teamColor }}>
                                            {position.starter}
                                        </td>
                                        <td className="px-3 py-2 text-gray-500">
                                            {position.backup.length > 0 ? position.backup.join(', ') : '-'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* 선발 로테이션 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">⚾</span>
                        <h3 className="text-xl font-bold text-gray-800">선발 로테이션</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                        {depthChart.rotation.map((pitcher, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 text-center"
                            >
                                <div className="text-2xl mb-2">
                                    {idx === 0 ? '👑' : `${idx + 1}선발`}
                                </div>
                                <p className="font-semibold text-gray-800 text-sm">{pitcher}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 불펜 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Shield className="text-red-500" size={24} />
                        <h3 className="text-xl font-bold text-gray-800">불펜</h3>
                    </div>
                    <div className="space-y-4">
                        {/* 마무리 */}
                        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4">
                            <div className="flex items-center gap-2">
                                <span className="text-xl">🔥</span>
                                <span className="font-semibold text-red-600">마무리</span>
                                <span className="font-bold text-gray-800 ml-2">{depthChart.bullpen.closer}</span>
                            </div>
                        </div>

                        {/* 셋업/필승조 */}
                        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xl">⚡</span>
                                <span className="font-semibold text-orange-600">필승조</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {depthChart.bullpen.setup.map((pitcher, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm"
                                    >
                                        {pitcher}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 미들/추격조 */}
                        {depthChart.bullpen.middle.length > 0 && (
                            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xl">🎯</span>
                                    <span className="font-semibold text-green-600">추격조/스윙맨</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {depthChart.bullpen.middle.map((pitcher, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm"
                                        >
                                            {pitcher}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </Card>
    );
}
