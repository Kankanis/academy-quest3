# spec/factories/quests.rb

FactoryBot.define do
  factory :quest do
    # กำหนดค่าเริ่มต้นสำหรับ attributes ของ Quest model
    # คุณสามารถปรับแต่งค่าเหล่านี้ได้
    name { "My Default Quest" }
    status { false } # เช่น ค่าเริ่มต้นคือยังไม่เสร็จ

    # ถ้าคุณต้องการ Factory สำหรับ Quest ที่เสร็จสมบูรณ์แล้ว
    trait :completed do
      status { true }
    end

    # ตัวอย่างการใช้:
    # create(:quest) => จะสร้าง Quest ที่มี name "My Default Quest" และ status false
    # create(:quest, name: "Specific Quest Name") => จะใช้ชื่อที่คุณระบุ
    # create(:quest, :completed) => จะสร้าง Quest ที่มี status true
  end
end
