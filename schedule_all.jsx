import React, { useState } from 'react';
import { Calendar, Clock, MapPin, BookOpen, Users, AlertCircle } from 'lucide-react';

const ScheduleAll = () => {
  const [selectedMonth, setSelectedMonth] = useState('march');

  const renderFebruary = () => (
    <div className="flex flex-col gap-3">
      {/* 2月カレンダー */}
      <div className="bg-white rounded-lg shadow-lg p-3 border-l-4 border-slate-400">
        <div className="flex items-center mb-2">
          <Calendar className="w-6 h-6 text-slate-600 mr-2" />
          <h2 className="text-xl font-bold text-slate-800">2月 活動カレンダー</h2>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-300">
          <p className="text-center font-bold text-slate-700 mb-3 text-lg">2月</p>
          <div className="grid grid-cols-7 gap-1 text-sm">
            <div className="text-center text-gray-500 font-semibold">日</div>
            <div className="text-center text-gray-500 font-semibold">月</div>
            <div className="text-center text-gray-500 font-semibold">火</div>
            <div className="text-center text-gray-500 font-semibold">水</div>
            <div className="text-center text-gray-500 font-semibold">木</div>
            <div className="text-center text-gray-500 font-semibold">金</div>
            <div className="text-center text-gray-500 font-semibold">土</div>
            
            <div className="text-center py-1">1</div>
            <div className="text-center py-1">2</div>
            <div className="text-center py-1">3</div>
            <div className="text-center py-1">4</div>
            <div className="text-center py-1">5</div>
            <div className="text-center py-1">6</div>
            <div className="text-center py-1">7</div>
            
            <div className="text-center py-1">8</div>
            <div className="text-center py-1">9</div>
            <div className="text-center py-1">10</div>
            <div className="text-center py-1 bg-red-100 rounded font-bold text-red-700">11●</div>
            <div className="text-center py-1">12</div>
            <div className="text-center py-1">13</div>
            <div className="text-center py-1">14</div>
            
            <div className="text-center py-1">15</div>
            <div className="text-center py-1">16</div>
            <div className="text-center py-1">17</div>
            <div className="text-center py-1 bg-green-100 rounded font-bold text-green-700">18●</div>
            <div className="text-center py-1">19</div>
            <div className="text-center py-1">20</div>
            <div className="text-center py-1">21</div>
            
            <div className="text-center py-1">22</div>
            <div className="text-center py-1 bg-blue-100 rounded font-bold text-blue-700">23●</div>
            <div className="text-center py-1">24</div>
            <div className="text-center py-1 bg-green-100 rounded font-bold text-green-700">25●</div>
            <div className="text-center py-1">26</div>
            <div className="text-center py-1">27</div>
            <div className="text-center py-1">28</div>
          </div>
        </div>
        <div className="mt-3 flex gap-4 justify-center text-sm">
          <span className="flex items-center gap-1"><span className="w-4 h-4 bg-blue-100 rounded"></span>団体活動</span>
          <span className="flex items-center gap-1"><span className="w-4 h-4 bg-green-100 rounded"></span>個人レッスン</span>
          <span className="flex items-center gap-1"><span className="w-4 h-4 bg-red-100 rounded"></span>試合</span>
        </div>
      </div>

      {/* 2月団体活動 */}
      <div className="bg-white rounded-lg shadow-lg p-3 border-l-4 border-slate-400">
        <div className="flex items-center mb-2">
          <Clock className="w-6 h-6 text-slate-600 mr-2" />
          <h2 className="text-xl font-bold text-slate-800">団体活動スケジュール</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-50 p-2 rounded-lg border border-slate-300">
            <p className="text-sm font-bold text-slate-700 mb-2">2/23（月・祝）</p>
            <p className="text-xs text-slate-600 mb-2">教育プラザ富樫</p>
            <div className="space-y-1">
              <div className="bg-blue-50 p-2 rounded border border-blue-300">
                <p className="text-sm font-bold text-slate-700">📚 13:30～14:30 研修会</p>
              </div>
              <div className="bg-blue-50 p-2 rounded border border-blue-300">
                <p className="text-sm font-bold text-slate-700">🏀 14:30～16:30 バスケ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2月個人レッスン */}
      <div className="bg-white rounded-lg shadow-lg p-3 border-l-4 border-slate-400">
        <div className="flex items-center mb-2">
          <Users className="w-5 h-5 text-slate-600 mr-2" />
          <h2 className="text-lg font-bold text-slate-800">2月 個人レッスン</h2>
          <span className="text-xs text-gray-600 ml-2">※3世帯以上で団体予約</span>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-slate-50 p-2 rounded-lg border border-slate-300">
            <p className="text-xs font-bold text-slate-600 mb-1">📍 市総合体育館</p>
            <p className="font-bold text-slate-700 text-sm">2/18(水) 18:00～</p>
            <p className="text-xs text-gray-600">指導：玉邑</p>
          </div>
          
          <div className="bg-slate-50 p-2 rounded-lg border border-slate-300">
            <p className="text-xs font-bold text-slate-600 mb-1">📍 市総合体育館</p>
            <p className="font-bold text-slate-700 text-sm">2/25(水) 18:00～</p>
            <p className="text-xs text-gray-600">指導：玉邑</p>
          </div>
        </div>
      </div>

      {/* 2月イベント */}
      <div className="bg-white rounded-lg shadow-lg p-3 border-l-4 border-red-400">
        <div className="flex items-center mb-2">
          <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
          <h2 className="text-lg font-bold text-red-700">イベント・試合</h2>
        </div>
        
        <div className="bg-orange-50 p-2 rounded-lg border border-orange-300">
          <p className="font-bold text-orange-700 text-base text-center">🏕️ 4月に合宿企画中！</p>
          <p className="text-xs text-gray-700 text-center mt-1">詳細は決まり次第お知らせします</p>
        </div>
      </div>
    </div>
  );

  const renderMarch = () => (
    <div className="flex flex-col gap-3">
      {/* 3月カレンダー */}
      <div className="bg-white rounded-lg shadow-lg p-3 border-l-4 border-slate-400">
        <div className="flex items-center mb-2">
          <Calendar className="w-6 h-6 text-slate-600 mr-2" />
          <h2 className="text-xl font-bold text-slate-800">3月 活動カレンダー</h2>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-300">
          <p className="text-center font-bold text-slate-700 mb-3 text-lg">3月</p>
          <div className="grid grid-cols-7 gap-1 text-sm">
            <div className="text-center text-gray-500 font-semibold">日</div>
            <div className="text-center text-gray-500 font-semibold">月</div>
            <div className="text-center text-gray-500 font-semibold">火</div>
            <div className="text-center text-gray-500 font-semibold">水</div>
            <div className="text-center text-gray-500 font-semibold">木</div>
            <div className="text-center text-gray-500 font-semibold">金</div>
            <div className="text-center text-gray-500 font-semibold">土</div>
            
            <div className="text-center py-1 bg-blue-100 rounded font-bold text-blue-700">1●</div>
            <div className="text-center py-1 bg-green-100 rounded font-bold text-green-700">2●</div>
            <div className="text-center py-1">3</div>
            <div className="text-center py-1">4</div>
            <div className="text-center py-1 bg-green-100 rounded font-bold text-green-700">5●</div>
            <div className="text-center py-1">6</div>
            <div className="text-center py-1 bg-orange-100 rounded font-bold text-orange-700">7●</div>
            
            <div className="text-center py-1 bg-blue-100 rounded font-bold text-blue-700">8●</div>
            <div className="text-center py-1 bg-green-100 rounded font-bold text-green-700">9●</div>
            <div className="text-center py-1">10</div>
            <div className="text-center py-1">11</div>
            <div className="text-center py-1 bg-green-100 rounded font-bold text-green-700">12●</div>
            <div className="text-center py-1">13</div>
            <div className="text-center py-1">14</div>
            
            <div className="text-center py-1 bg-orange-100 rounded font-bold text-orange-700">15●</div>
            <div className="text-center py-1 bg-green-100 rounded font-bold text-green-700">16●</div>
            <div className="text-center py-1">17</div>
            <div className="text-center py-1">18</div>
            <div className="text-center py-1 bg-green-100 rounded font-bold text-green-700">19●</div>
            <div className="text-center py-1">20</div>
            <div className="text-center py-1">21</div>
            
            <div className="text-center py-1 bg-blue-100 rounded font-bold text-blue-700">22●</div>
            <div className="text-center py-1 bg-green-100 rounded font-bold text-green-700">23●</div>
            <div className="text-center py-1">24</div>
            <div className="text-center py-1">25</div>
            <div className="text-center py-1 bg-green-100 rounded font-bold text-green-700">26●</div>
            <div className="text-center py-1">27</div>
            <div className="text-center py-1">28</div>
            
            <div className="text-center py-1">29</div>
            <div className="text-center py-1 bg-green-100 rounded font-bold text-green-700">30●</div>
            <div className="text-center py-1">31</div>
          </div>
        </div>
        <div className="mt-3 flex gap-4 justify-center text-sm">
          <span className="flex items-center gap-1"><span className="w-4 h-4 bg-blue-100 rounded"></span>団体活動</span>
          <span className="flex items-center gap-1"><span className="w-4 h-4 bg-green-100 rounded"></span>個人レッスン</span>
          <span className="flex items-center gap-1"><span className="w-4 h-4 bg-orange-100 rounded"></span>イベント</span>
        </div>
      </div>

      {/* 3月団体活動 */}
      <div className="bg-white rounded-lg shadow-lg p-3 border-l-4 border-slate-400">
        <div className="flex items-center mb-2">
          <Clock className="w-6 h-6 text-slate-600 mr-2" />
          <h2 className="text-xl font-bold text-slate-800">団体活動スケジュール</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          {/* 3/1 */}
          <div className="bg-slate-50 p-2 rounded-lg border border-slate-300">
            <p className="text-sm font-bold text-slate-700 mb-1">3/1（日）</p>
            <p className="text-sm font-bold text-slate-700 mb-2">📍 医王山・西部</p>
            <div className="space-y-1">
              <div className="bg-blue-50 p-2 rounded border border-blue-300">
                <p className="text-xs font-bold text-slate-700">⛷️ 9:00～11:00 スキー・スノボ</p>
              </div>
              <div className="bg-blue-50 p-2 rounded border border-blue-300">
                <p className="text-xs font-bold text-slate-700">🍙 11:00～ 移動・軽食</p>
              </div>
              <div className="bg-blue-50 p-2 rounded border border-blue-300">
                <p className="text-xs font-bold text-slate-700">🏀 12:00～ バスケ</p>
              </div>
            </div>
          </div>

          {/* 3/8 */}
          <div className="bg-slate-50 p-2 rounded-lg border border-slate-300">
            <p className="text-sm font-bold text-slate-700 mb-1">3/8（日）</p>
            <p className="text-sm font-bold text-slate-700 mb-2">📍 鳴和台市民体育館</p>
            <div className="space-y-1">
              <div className="bg-blue-50 p-2 rounded border border-blue-300">
                <p className="text-xs font-bold text-slate-700">📚 15:30～16:15 研修会</p>
              </div>
              <div className="bg-blue-50 p-2 rounded border border-blue-300">
                <p className="text-xs font-bold text-slate-700">🏊 16:30～17:30 プール</p>
              </div>
              <div className="bg-blue-50 p-2 rounded border border-blue-300">
                <p className="text-xs font-bold text-slate-700">🏀 18:00～19:00 バスケ</p>
              </div>
            </div>
          </div>

          {/* 3/22 */}
          <div className="bg-slate-50 p-2 rounded-lg border border-slate-300">
            <p className="text-sm font-bold text-slate-700 mb-1">3/22（日）</p>
            <p className="text-sm font-bold text-slate-700 mb-2">📍 城南・泉野図書館</p>
            <div className="space-y-1">
              <div className="bg-blue-50 p-2 rounded border border-blue-300">
                <p className="text-xs font-bold text-slate-700">📚 16:30～17:30 研修会</p>
                <p className="text-xs text-slate-600">（泉野図書館）</p>
              </div>
              <div className="bg-blue-50 p-2 rounded border border-blue-300">
                <p className="text-xs font-bold text-slate-700">🏀 18:00～19:00 バスケ</p>
                <p className="text-xs text-slate-600">（城南）</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3月個人レッスン */}
      <div className="bg-white rounded-lg shadow-lg p-3 border-l-4 border-slate-400">
        <div className="flex items-center mb-2">
          <Users className="w-5 h-5 text-slate-600 mr-2" />
          <h2 className="text-lg font-bold text-slate-800">3月 個人レッスン</h2>
          <span className="text-xs text-gray-600 ml-2">※3世帯以上で団体活動へ</span>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-slate-50 p-2 rounded-lg border border-slate-300">
            <p className="text-xs font-bold text-slate-600 mb-1">📍 城南市民体育館</p>
            <p className="font-bold text-slate-700 text-sm mb-1">毎週月曜日 18:00～20:00</p>
            <p className="text-xs text-gray-600">指導：玉邑</p>
          </div>
          
          <div className="bg-slate-50 p-2 rounded-lg border border-slate-300">
            <p className="text-xs font-bold text-slate-600 mb-1">📍 市総合体育館</p>
            <p className="font-bold text-slate-700 text-sm mb-1">毎週木曜日 19:00～20:30</p>
            <p className="text-xs text-gray-600">指導：玉邑</p>
          </div>
        </div>
      </div>

      {/* 3月イベント */}
      <div className="bg-white rounded-lg shadow-lg p-3 border-l-4 border-orange-400">
        <div className="flex items-center mb-2">
          <AlertCircle className="w-5 h-5 text-orange-600 mr-2" />
          <h2 className="text-lg font-bold text-orange-700">イベント</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-orange-50 p-2 rounded-lg border border-orange-300">
            <p className="font-bold text-orange-700 text-base text-center">⛷️ 3/7（金）午後 スキー・スノボ</p>
            <p className="text-xs text-gray-700 text-center mt-1">医王山スキー場</p>
          </div>
          
          <div className="bg-orange-50 p-2 rounded-lg border border-orange-300">
            <p className="font-bold text-orange-700 text-base text-center">⛰️ 3/15（土）早朝～午前 鞍掛山登山</p>
            <p className="text-xs text-gray-700 text-center mt-1">詳細は別途連絡</p>
          </div>
        </div>
      </div>

      {/* 3月連絡事項 */}
      <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-300 shadow-lg">
        <div className="flex items-center mb-2">
          <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
          <h3 className="text-base font-bold text-yellow-800">連絡事項</h3>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <p className="text-sm text-slate-700">・3/1プールは中止（各自任意で利用可）</p>
          <p className="text-sm text-slate-700">・団体活動・研修会は3世帯以上で成立</p>
          <p className="text-sm text-slate-700">・合宿企画をすすめる　親子合わせて8名以上で開催</p>
        </div>
      </div>
    </div>
  );

  const renderApril = () => (
    <div className="flex flex-col gap-3">
      {/* 4月カレンダー */}
      <div className="bg-white rounded-lg shadow-lg p-3 border-l-4 border-slate-400">
        <div className="flex items-center mb-2">
          <Calendar className="w-6 h-6 text-slate-600 mr-2" />
          <h2 className="text-xl font-bold text-slate-800">4月 活動カレンダー</h2>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-300">
          <p className="text-center font-bold text-slate-700 mb-3 text-lg">4月</p>
          <div className="grid grid-cols-7 gap-1 text-sm">
            <div className="text-center text-gray-500 font-semibold">日</div>
            <div className="text-center text-gray-500 font-semibold">月</div>
            <div className="text-center text-gray-500 font-semibold">火</div>
            <div className="text-center text-gray-500 font-semibold">水</div>
            <div className="text-center text-gray-500 font-semibold">木</div>
            <div className="text-center text-gray-500 font-semibold">金</div>
            <div className="text-center text-gray-500 font-semibold">土</div>
            
            <div className="text-center text-gray-300"></div>
            <div className="text-center text-gray-300"></div>
            <div className="text-center py-1">1</div>
            <div className="text-center py-1">2</div>
            <div className="text-center py-1">3</div>
            <div className="text-center py-1">4</div>
            <div className="text-center py-1">5</div>
            
            <div className="text-center py-1">6</div>
            <div className="text-center py-1 bg-green-100 rounded font-bold text-green-700">7●</div>
            <div className="text-center py-1">8</div>
            <div className="text-center py-1">9</div>
            <div className="text-center py-1 bg-green-100 rounded font-bold text-green-700">10●</div>
            <div className="text-center py-1">11</div>
            <div className="text-center py-1 bg-blue-100 rounded font-bold text-blue-700">12●</div>
            
            <div className="text-center py-1">13</div>
            <div className="text-center py-1 bg-green-100 rounded font-bold text-green-700">14●</div>
            <div className="text-center py-1">15</div>
            <div className="text-center py-1">16</div>
            <div className="text-center py-1 bg-green-100 rounded font-bold text-green-700">17●</div>
            <div className="text-center py-1">18</div>
            <div className="text-center py-1 bg-blue-100 rounded font-bold text-blue-700">19●</div>
            
            <div className="text-center py-1">20</div>
            <div className="text-center py-1 bg-green-100 rounded font-bold text-green-700">21●</div>
            <div className="text-center py-1">22</div>
            <div className="text-center py-1">23</div>
            <div className="text-center py-1 bg-green-100 rounded font-bold text-green-700">24●</div>
            <div className="text-center py-1">25</div>
            <div className="text-center py-1">26</div>
            
            <div className="text-center py-1">27</div>
            <div className="text-center py-1 bg-green-100 rounded font-bold text-green-700">28●</div>
            <div className="text-center py-1 bg-blue-100 rounded font-bold text-blue-700">29●</div>
            <div className="text-center py-1">30</div>
          </div>
        </div>
        <div className="mt-3 flex gap-4 justify-center text-sm">
          <span className="flex items-center gap-1"><span className="w-4 h-4 bg-blue-100 rounded"></span>団体活動</span>
          <span className="flex items-center gap-1"><span className="w-4 h-4 bg-green-100 rounded"></span>個人レッスン</span>
        </div>
      </div>

      {/* 4月団体活動 */}
      <div className="bg-white rounded-lg shadow-lg p-3 border-l-4 border-slate-400">
        <div className="flex items-center mb-2">
          <Clock className="w-6 h-6 text-slate-600 mr-2" />
          <h2 className="text-xl font-bold text-slate-800">団体活動スケジュール</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-slate-50 p-2 rounded-lg border border-slate-300">
            <p className="text-sm font-bold text-slate-700 mb-1">4/12（日）</p>
            <p className="text-sm font-bold text-slate-700 mb-2">📍 城南市民体育館</p>
            <div className="space-y-1">
              <div className="bg-blue-50 p-2 rounded border border-blue-300">
                <p className="text-sm font-bold text-slate-700">🏀 15:00～17:00 バスケ</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-2 rounded-lg border border-slate-300">
            <p className="text-sm font-bold text-slate-700 mb-1">4/19（日）</p>
            <p className="text-sm font-bold text-slate-700 mb-2">📍 城南市民体育館</p>
            <div className="space-y-1">
              <div className="bg-blue-50 p-2 rounded border border-blue-300">
                <p className="text-sm font-bold text-slate-700">🏀 15:00～17:00 バスケ</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-2 rounded-lg border border-slate-300">
            <p className="text-sm font-bold text-slate-700 mb-1">4/29（水）</p>
            <p className="text-sm font-bold text-slate-700 mb-2">📍 城南市民体育館</p>
            <div className="space-y-1">
              <div className="bg-blue-50 p-2 rounded border border-blue-300">
                <p className="text-sm font-bold text-slate-700">🏀 15:00～17:00 バスケ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4月個人レッスン */}
      <div className="bg-white rounded-lg shadow-lg p-3 border-l-4 border-slate-400">
        <div className="flex items-center mb-2">
          <Users className="w-5 h-5 text-slate-600 mr-2" />
          <h2 className="text-lg font-bold text-slate-800">4月 個人レッスン</h2>
          <span className="text-xs text-gray-600 ml-2">※3世帯以上で団体活動へ</span>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-slate-50 p-2 rounded-lg border border-slate-300">
            <p className="text-xs font-bold text-slate-600 mb-1">📍 城南市民体育館</p>
            <p className="font-bold text-slate-700 text-sm mb-1">毎週月曜日 18:00～20:00</p>
            <p className="text-xs text-gray-600">指導：玉邑</p>
          </div>
          
          <div className="bg-slate-50 p-2 rounded-lg border border-slate-300">
            <p className="text-xs font-bold text-slate-600 mb-1">📍 市総合体育館</p>
            <p className="font-bold text-slate-700 text-sm mb-1">毎週木曜日 19:00～20:30</p>
            <p className="text-xs text-gray-600">指導：玉邑</p>
          </div>
        </div>
      </div>

      {/* 4月連絡事項 */}
      <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-300 shadow-lg">
        <div className="flex items-center mb-2">
          <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
          <h3 className="text-base font-bold text-yellow-800">連絡事項</h3>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <p className="text-sm text-slate-700">・団体活動・研修会は3世帯以上で成立</p>
          <p className="text-sm text-slate-700">・合宿企画をすすめる　親子合わせて8名以上で開催</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-[1080px] mx-auto bg-gradient-to-br from-slate-50 to-gray-50 p-5">
      {/* ヘッダー */}
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">野町MBC 活動スケジュール</h1>
        
        {/* 月選択タブ */}
        <div className="flex justify-center gap-2 mb-4">
          <button
            onClick={() => setSelectedMonth('february')}
            className={`px-6 py-2 rounded-lg font-bold transition-all ${
              selectedMonth === 'february'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-slate-100'
            }`}
          >
            2月
          </button>
          <button
            onClick={() => setSelectedMonth('march')}
            className={`px-6 py-2 rounded-lg font-bold transition-all ${
              selectedMonth === 'march'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-slate-100'
            }`}
          >
            3月
          </button>
          <button
            onClick={() => setSelectedMonth('april')}
            className={`px-6 py-2 rounded-lg font-bold transition-all ${
              selectedMonth === 'april'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-slate-100'
            }`}
          >
            4月
          </button>
        </div>
        
        <p className="text-sm text-slate-600">更新：2/15</p>
      </div>

      {/* コンテンツ */}
      {selectedMonth === 'february' && renderFebruary()}
      {selectedMonth === 'march' && renderMarch()}
      {selectedMonth === 'april' && renderApril()}
    </div>
  );
};

export default ScheduleAll;
