
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Data Deletion Request</h1>
          <p className="text-gray-600 mt-1">Yêu cầu xóa dữ liệu cá nhân</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Warning Banner */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white p-6 rounded-xl shadow-lg mb-8 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-xl">⚠️</span>
            </div>
            <div>
              <h2 className="text-xl font-bold">Cảnh báo quan trọng</h2>
              <p className="text-red-100 mt-1">Việc xóa dữ liệu sẽ không thể hoàn tác</p>
            </div>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Yêu cầu xóa dữ liệu</h2>
            <p className="text-gray-300">Vui lòng điền thông tin bên dưới để yêu cầu xóa dữ liệu cá nhân của bạn</p>
          </div>

          <div className="p-8">
            <form className="space-y-6">
              {/* Personal Information Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3">1</span>
                  Thông tin cá nhân
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="block text-gray-700 font-medium mb-2">Họ và tên *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      placeholder="Nhập họ và tên đầy đủ"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      placeholder="email@example.com"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="block text-gray-700 font-medium mb-2">Số điện thoại</label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      placeholder="0123456789"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="block text-gray-700 font-medium mb-2">Ngày sinh</label>
                    <input 
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Data Types Section */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm mr-3">2</span>
                  Loại dữ liệu cần xóa
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Thông tin cá nhân',
                    'Lịch sử giao dịch',
                    'Dữ liệu sử dụng',
                    'Ảnh và file đã tải lên',
                    'Tin nhắn và bình luận',
                    'Tất cả dữ liệu'
                  ].map((item, index) => (
                    <label key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 text-purple-600 border-2 border-gray-300 rounded focus:ring-purple-500"
                      />
                      <span className="text-gray-700">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reason Section */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3">3</span>
                  Lý do yêu cầu xóa
                </h3>
                
                <div className="space-y-3">
                  {[
                    'Không còn sử dụng dịch vụ',
                    'Bảo vệ quyền riêng tư',
                    'Dữ liệu không chính xác',
                    'Yêu cầu pháp lý',
                    'Khác'
                  ].map((reason, index) => (
                    <label key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer">
                      <input 
                        type="radio" 
                        name="reason"
                        className="w-5 h-5 text-green-600 border-2 border-gray-300 focus:ring-green-500"
                      />
                      <span className="text-gray-700">{reason}</span>
                    </label>
                  ))}
                </div>
                
                <div className="mt-4">
                  <label className="block text-gray-700 font-medium mb-2">Chi tiết thêm</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 resize-none"
                    placeholder="Vui lòng mô tả chi tiết lý do yêu cầu xóa dữ liệu..."
                  ></textarea>
                </div>
              </div>

              {/* Verification Section */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm mr-3">4</span>
                  Xác thực danh tính
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Tải lên ảnh CMND/CCCD</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors duration-200">
                      <input type="file" accept="image/*" className="hidden" id="idUpload" />
                      <label htmlFor="idUpload" className="cursor-pointer">
                        <div className="text-4xl mb-2">📄</div>
                        <p className="text-gray-600">Nhấn để chọn file hoặc kéo thả vào đây</p>
                        <p className="text-sm text-gray-500 mt-1">JPG, PNG tối đa 5MB</p>
                      </label>
                    </div>
                  </div>
                  
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input type="checkbox" required className="w-5 h-5 text-orange-600 border-2 border-gray-300 rounded focus:ring-orange-500 mt-1" />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      Tôi xác nhận rằng tôi là chủ sở hữu hợp pháp của dữ liệu được yêu cầu xóa và đã cung cấp thông tin chính xác
                    </span>
                  </label>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-start space-x-3">
                  <input type="checkbox" required className="w-5 h-5 text-red-600 border-2 border-gray-300 rounded focus:ring-red-500 mt-1" />
                  <div className="text-sm text-gray-700 leading-relaxed">
                    <p className="font-medium mb-2">Tôi hiểu và đồng ý với các điều khoản sau:</p>
                    <ul className="space-y-1 text-gray-600 ml-4">
                      <li>• Việc xóa dữ liệu sẽ không thể hoàn tác</li>
                      <li>• Quá trình xử lý có thể mất 30-90 ngày</li>
                      <li>• Một số dữ liệu có thể được giữ lại theo yêu cầu pháp lý</li>
                      <li>• Dịch vụ có thể bị ảnh hưởng sau khi xóa dữ liệu</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button 
                  type="button"
                  className="flex-1 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Hủy bỏ
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  Gửi yêu cầu xóa dữ liệu
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Information Footer */}
        <div className="mt-12 bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Thông tin hỗ trợ</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div>
              <strong className="text-gray-800">📧 Email hỗ trợ:</strong>
              <br />privacy@company.com
            </div>
            <div>
              <strong className="text-gray-800">📞 Hotline:</strong>
              <br />1900-1234 (8:00-17:00)
            </div>
            <div>
              <strong className="text-gray-800">⏱️ Thời gian xử lý:</strong>
              <br />30-90 ngày làm việc
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
